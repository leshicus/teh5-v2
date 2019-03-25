const { ApolloServer, gql } = require("apollo-server");
import { RedisPubSub } from 'graphql-redis-subscriptions';

const pubsub = new RedisPubSub();
const db = require("./db.json");


const typeDefs = gql`
  type Score {
    id: String
    value: Int
    opponent: String
    period: Int
  }

  type Subscription {
    scoreChanged: Score
  }

  type Query {
    score: [Score]
  }
`;

const resolvers = {
  Subscription: {
    scoreChanged: {
        () => pubsub.asyncIterator([POST_ADDED])
    }
  },
};

const server = new ApolloServer({
  typeDefs,
  schemaDirectives: {
    // date: FormattableDateDirective,
    intl: IntlDirective
  }
  // resolvers,
  // subscriptions: {
  //   onConnect: (connectionParams, webSocket, context) => {
  //     console.log(connectionParams);
  //   },
  //   onDisconnect: (webSocket, context) => {
  //     console.log("disconnected");
  //   }
  // }
});
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
