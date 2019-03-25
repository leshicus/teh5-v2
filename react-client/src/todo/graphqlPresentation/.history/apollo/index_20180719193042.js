const { ApolloServer, gql } = require("apollo-server");
import { RedisPubSub } from "graphql-redis-subscriptions";

const pubsub = new RedisPubSub();
const db = require("./db.json");
const SCORE_CHANGED = "Score changed";

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
    changeScore(id: String, value: Int): Score
  }

  type Query {
    score: [Score]
  }
`;

function Score() {
  const db = [];

  this.changeScore = (score) => {
    db.push(post);
  };

  this.scores = () => {
    return db;
  };
}

const score = new Score();

const resolvers = {
  Subscription: {
    scoreChanged: {
      subscribe: () => pubsub.asyncIterator([SCORE_CHANGED])
    }
  },
  Mutation: {
    changeScore(root, args, context) {
      pubsub.publish(SCORE_CHANGED, { scoreChanged: args });
      return score.changeScore(args);
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
