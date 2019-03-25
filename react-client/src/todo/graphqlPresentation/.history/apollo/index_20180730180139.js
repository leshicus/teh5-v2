const { ApolloServer, gql } = require("apollo-server");
const feed = require("./feed.js");
const { scoreController } = require("./scoreController.js");
const { SCORE_CHANGED } = require("./constants.js");
const { RedisClient } = require("./redisClient.js");
const redisClient = new RedisClient();

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
      subscribe: () => redisClient.asyncIterator([SCORE_CHANGED])
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
