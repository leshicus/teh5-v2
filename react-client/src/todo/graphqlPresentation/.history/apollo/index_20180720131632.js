const { ApolloServer, gql } = require("apollo-server");
const { RedisPubSub } = require("graphql-redis-subscriptions");

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
    changeScore(opponent: String, period: Int, value: Int): Score
  }

  type Query {
    scores: [Score]
  }
`;

function Score() {
  let scoreDb = db.scores;

  this.changeScore = (score) => {
    console.log(score);

    scoreDb = scoreDb.map((item) => {
      if (item.opponent === score.opponent && item.period === score.period) {
        return {
          ...item,
          value: score.value
        };
      }

      return item;
    });
  };

  this.scores = () => {
    return scoreDb;
  };
}

const score = new Score();

const resolvers = {
  Query: {
    scores(root, args, context) {
      return score.scores();
    }
  },
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
