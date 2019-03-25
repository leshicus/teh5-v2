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
    sport: Sport
    sports: [Sport]
    regions: [Region]
  }
`;

const resolvers = {
  Query: {
    sports: () => db.sports,
    regions: () => db.regions,
    sport: (root, args, context, info) => {
      return find(db.sports, { id: args.id });
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
