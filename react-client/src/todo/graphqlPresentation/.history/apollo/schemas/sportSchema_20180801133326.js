const { makeExecutableSchema } = require("graphql-tools");

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

module.exports = {
  sportSchema
};
