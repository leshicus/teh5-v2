const { ApolloServer, gql, withFilter } = require("apollo-server");
const feed = require("./feed.js");
const { scoreController } = require("./scoreController.js");
const { SCORE_CHANGED, MARKET_CHANGED } = require("./constants.js");
const { RedisClient } = require("./redisClient.js");
const redisClient = new RedisClient();
import {
  GraphQLSchema,
} from 'graphql/type';

const typeDefs = gql`
  type Sport {
    id: String
    description: String
    regions: [Region]
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
    getScores: [Score]

    getSports: [Sport]
    getSportById(id: ID!): Sport

    #regions: [Region]
    getRegionsBySportId(id: ID!): [Region]
  }
`;

const resolvers = {
  Query: {
    getSports: async (root, { id }, context, info) => {
      let sports = await redisClient.get("sports");
      sports = sports.map((item) => ({
        ...item
        //regionsBySport:
      }));
      return sports;
    },

    getRegionsBySportId: async (root, { id }, context, info) => {
      console.log("regionsBySport", id);
      const regions = await redisClient.get("regions");
      return regions.filter((item) => item.sportId === id);
    },
    getSportById: async (root, { id }, context, info) => {
      console.log("sport", id);
      const sports = await redisClient.get("sports");
      return sports.find((item) => item.id === id);
    },
    getScores(root, args, context) {
      return redisClient.get("scores");
    },
    regions: async (root, args, context, info) => {
      console.log(args);
      // let sports = await redisClient.get("sports");
      // sports = sports.map((item) => ({
      //   ...item
      //   //regionsBySport:
      // }));
      // return sports;
    }
  },
  Sport: {
    
    regions(parent, args, context, info) {
      return info.mergeInfo.delegateToSchema({
        schema: GraphQLSchema,
        operation: 'query',
        fieldName: 'getSports',
        args: {
          sportId: parent.id,
        },
        context,
        info,
      });
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
