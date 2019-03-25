let { ApolloServer, gql } = require("apollo-server");
let { RedisPubSub } = require("graphql-redis-subscriptions");
let feed = require("./feed.js");
let { scoreController } = require("./scoreController.js");

let pubsub = new RedisPubSub();
let SCORE_CHANGED = "Score_change";

let typeDefs = gql`
  type Score {
    id: String
    value: Int
    opponent: String
    period: Int
  }

  type Subscription {
    scoreChanged: Score
  }

  type Mutation {
    changeScore(opponent: String, period: Int, value: Int): Score
  }

  type Query {
    scores: [Score]
  }
`;

let resolvers = {
  Query: {
    scores(root, args, context) {
      return scoreController.scores();
    }
  },
  Subscription: {
    scoreChanged: {
      subscribe: () => pubsub.asyncIterator([SCORE_CHANGED])
    }
  },
  Mutation: {
    changeScore(root, args, context) {
      return scoreController.changeScore(args);
    }
  }
};

let server = new ApolloServer({
  typeDefs,
  resolvers,
  subscriptions: {
    onConnect: (connectionParams, webSocket, context) => {
      console.log(connectionParams);
    },
    onDisconnect: (webSocket, context) => {
      console.log("disconnected");
    }
  }
});
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

let files = require("./");
console.log(files);
console.log(files.keys());
