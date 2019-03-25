const { ApolloServer, gql } = require("apollo-server");
const db = require("./db.json");

const typeDefs = gql`
  type Sport {
    id: String
    description: String
  }

  type Query {
    sports: [Sport]
  }
`;

const resolvers = {
  Query: {
    sports: () => sports
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
