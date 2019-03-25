const { ApolloServer, gql } = require("apollo-server");
const db = require("./db.json");

const typeDefs = gql`
  """
  Multiline comment
  """
  type Sport {
    id: String
    description: String
  }
  "Single-line comment"
  type # dewed
  Region {
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
