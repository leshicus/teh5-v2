const { makeExecutableSchema } = require("graphql-tools");

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

module.exports = {
  regionSchema
};
