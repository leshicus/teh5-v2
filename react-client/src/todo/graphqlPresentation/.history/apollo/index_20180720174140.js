const { ApolloServer, gql } = require("apollo-server");
const { RedisPubSub } = require("graphql-redis-subscriptions");
const redis = require("redis");
const feed = require("./feed.js");
const { promisify } = require("util");

const redisClient = redis.createClient();
const getAsync = promisify(redisClient.get).bind(redisClient);

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

const Score = async () => {
  let scoreDb = JSON.parse(await getAsync("scores"));

  this.changeScore = (score) => {
    console.log(score);
    let result = {};

    scoreDb = scoreDb.map((item) => {
      if (item.opponent === score.opponent && item.period === score.period) {
        result = {
          ...item,
          value: score.value
        };
        return result;
      }

      return item;
    });

    return result;
  };

  this.scores = () => {
    console.log(scoreDb);
    return scoreDb;
  };
};

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
