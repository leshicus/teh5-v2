const { ApolloServer, withFilter } = require("apollo-server");
const { scoreController } = require("./scoreController.js");
const { SCORE_CHANGED, MARKET_CHANGED } = require("./constants.js");
const { RedisClient } = require("./redisClient.js");
const redisClient = new RedisClient();
const { mergeSchemas } = require("graphql-tools");
const { sportSchema } = require("./schemas/sportSchema");

const regionSchema = makeExecutableSchema({
  typeDefs: `
    type Region {
      id: ID!
      description: String
      sportId: ID!
    }

    type Query {
      getRegions: [Region]
      getRegionsBySportId(id: ID!): [Region]
    }
  `,
  resolvers: {
    Query: {
      getRegions: async (parent, { id }, context, info) => {
        console.log("Query.getRegions");
        let regions = await redisClient.get("regions");
        return regions;
      },
      getRegionsBySportId: async (parent, { id }, context, info) => {
        console.log("Query.getRegionsBySportId", id);
        const regions = await redisClient.get("regions");
        return regions.filter((item) => item.sportId === id);
      }
    }
  }
});

const subscriptionSchema = makeExecutableSchema({
  typeDefs: `
    type Score {
      id: ID!
      value: Int
      opponent: String
      period: Int
      eventId: ID!
    }

    type Market {
      id: ID!
      description: String
      eventId: ID!
    }

    type Subscription {
      scoreChanged(eventId: ID!): Score,
      marketChanged(eventId: ID!): Market,
    }

    type Mutation {
      changeScore (opponent: String, period: Int, value: Int): Score
    }

    type Query {
      getScores: [Score],
      getMarkets: [Market]
      #getScoreById(id: ID!): Score
    }
  `,
  resolvers: {
    Query: {
      getScores: async (parent, { id }, context, info) => {
        console.log("Query.getScores");
        return redisClient.get("scores");
      },
      getMarkets: async (parent, { id }, context, info) => {
        console.log("Query.getMarkets");
        return redisClient.get("markets");
      }
    },
    Subscription: {
      scoreChanged: {
        subscribe: withFilter(
          (_, variables) => {
            return redisClient.asyncIterator([SCORE_CHANGED]);
          },
          (payload, variables) => {
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
  }
});

const linkTypeDefs = `
  extend type Sport {
    regions: [Region]
  }

  extend type Region {
    sport: Sport
  }
`;

const schema = mergeSchemas({
  schemas: [sportSchema, regionSchema, subscriptionSchema, linkTypeDefs],
  resolvers: {
    Sport: {
      regions: {
        // fragment: `fragment SportFragment on Sport { id }`,
        resolve(sport, args, context, info) {
          console.log("Sport.regions", sport);

          return info.mergeInfo.delegateToSchema({
            schema: regionSchema,
            operation: "query",
            fieldName: "getRegionsBySportId",
            args: {
              id: sport.id
            },
            context,
            info
          });
        }
      }
    },
    Region: {
      sport: {
        fragment: `fragment RegionFragment on Region { sportId }`,
        resolve(region, args, context, info) {
          console.log("Region.sport", region);

          return info.mergeInfo.delegateToSchema({
            schema: sportSchema,
            operation: "query",
            fieldName: "getSportById",
            args: {
              id: region.sportId
            },
            context,
            info
          });
        }
      }
    }
  }
});

const server = new ApolloServer({
  schema,
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
