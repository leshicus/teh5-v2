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
    sport(id: String): Sport
  }
`;

const resolvers = {
  Query: {
    sports: () => db.sports,
    regions: () => db.regions,
    sport: (root, { id }, context, info) => {
      const sports = db.sports;
      return sports.find((item) => item.id === id);
    }
  },
  Region: {
    sport(sport) {
      console.log(sport);
      // return filter(db.regions, {
      //   id: sport.id
      // });
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ auth: req.headers.auth })
});
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
