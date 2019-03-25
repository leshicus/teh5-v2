const { ApolloServer, gql, withFilter } = require("apollo-server");
const { RedisClient } = require("./redisClient.js");
const redisClient = new RedisClient();
const {
  makeExecutableSchema,
  addMockFunctionsToSchema,
  mergeSchemas
} = require("graphql-tools");

const sportSchema = makeExecutableSchema({
  typeDefs: `
    type Sport {
      id: ID!
      description: String
    }

    type Query {
      getSports: [Sport]
      getSportById(id: ID!): Sport
    }
  `,
  resolvers: {
    Query: {
      getSportById: async (parent, { id }, context, info) => {
        console.log("Query.getSportById", id);
        const sports = await redisClient.get("sports");
        return sports.find((item) => item.id === id);
      },
      getSports: async (parent, { id }, context, info) => {
        console.log("Query.getSports");
        let sports = await redisClient.get("sports");
        return sports;
      }
    }
  }
});

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
        console.log("Query.getRegionsBySportId", id, parent);
        const regions = await redisClient.get("regions");
        return regions.filter((item) => item.sportId === id);
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
  schemas: [sportSchema, regionSchema, linkTypeDefs],
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
  schema
});
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
