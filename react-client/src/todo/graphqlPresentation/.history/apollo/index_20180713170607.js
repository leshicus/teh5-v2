const { ApolloServer, gql } = require("apollo-server");
const db = require("./db.json");

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

  type Query {
    sports: [Sport]
    regions: [Region]
  }
`;

const resolvers = {
  Query: {
    sport: (root, args, context, info) => {
      return find(db.sports, { id: args.id });
    },
    regions: () => db.regions
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
