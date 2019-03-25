const { ApolloServer, gql } = require("apollo-server");
const db = require("./db.json");

const typeDefs = gql`
  type Sport {
    id: String
    description: String
  }

  type Region {
    id: String
    description: String
    sport: [Sport]
  }

  type Query {
    sports: [Sport]
    regions: [Region]
  }
`;

const resolvers = {
  Query: {
    sports: () => db.sports,
    regions: () => db.regions
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
