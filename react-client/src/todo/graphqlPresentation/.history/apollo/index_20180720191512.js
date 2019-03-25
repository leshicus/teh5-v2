const { ApolloServer, gql } = require("apollo-server");
const { RedisPubSub } = require("graphql-redis-subscriptions");
const feed = require("./feed.js");
const { scoreController } = require("./scoreController.js");

const pubsub = new RedisPubSub();
const SCORE_CHANGED = "Score_change";

const typeDefs = gql`
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

const resolvers = {
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

const server = new ApolloServer({
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
