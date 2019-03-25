const { ApolloServer, gql, withFilter } = require("apollo-server");
const feed = require("./feed.js");
const { scoreController } = require("./scoreController.js");
const { SCORE_CHANGED, MARKET_CHANGED } = require("./constants.js");
const { RedisClient } = require("./redisClient.js");
const redisClient = new RedisClient();

const typeDefs = gql`
  type Sport {
    id: String
    description: String
    regionsBySportId: [Region]
  }

  type Region {
    id: String
    description: String
    sport: Sport
  }

  type Score {
    id: String
    value: Int
    opponent: String
    period: Int
    eventId: String
  }

  type Market {
    id: String
    description: String
    eventId: String
  }

  type Subscription {
    scoreChanged(eventId: String): Score
    marketChanged(eventId: String): Market
  }

  type Mutation {
    changeScore(opponent: String, period: Int, value: Int): Score
  }

  type Query {
    scores: [Score]

    sports: [Sport]
    sport(id: String): Sport

    regions: [Region]
    regionsBySportId: [Region]
  }
`;

const resolvers = {
  Query: {
    sports: () => {
      let sports = redisClient.get("sports");
      sports = sports.map(item=>({
        ...item,
        //regionsBySportId: 
      });

      return sports;
    },
    regions: () => redisClient.get("regions"),
    regionsBySportId: async (root, { id }, context, info) => {
      console.log(id);
      const regions = await redisClient.get("regions");
      return regions.filter((item) => item.sportId === id);
    },
    sport: async (root, { id }, context, info) => {
      console.log(id);
      const sports = await redisClient.get("sports");
      return sports.find((item) => item.id === id);
    },
    scores(root, args, context) {
      return redisClient.get("scores");
    }
  },
  Subscription: {
    scoreChanged: {
      subscribe: withFilter(
        (_, variables) => {
          // console.log("params: ", variables);
          return redisClient.asyncIterator([SCORE_CHANGED]);
        },
        (payload, variables) => {
          // console.log(payload.scoreChanged.eventId, variables.eventId);
          return payload.scoreChanged.eventId === variables.eventId;
        }
      )
    },
    marketChanged: {
      subscribe: withFilter(
        (_, variables) => {
          return redisClient.asyncIterator([MARKET_CHANGED]);
        },
        (payload, variables) => {
          return payload.marketChanged.eventId === variables.eventId;
        }
      )
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
      console.log("connectionParams: ", connectionParams);
    },
    onDisconnect: (webSocket, context) => {
      console.log("disconnected");
    }
  }
});
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
