const { ApolloServer, gql } = require("apollo-server");
const { RedisPubSub } = require("graphql-redis-subscriptions");

const pubsub = new RedisPubSub();
const db = require("./db.json");
const SCORE_CHANGED = "Score changed";

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

  type Mutation {
    changeScore(id: String, value: Int): Score
  }

  type Query {
    scores: [Score]
  }
`;

function Score() {
  const db = [{
    id: "1"
    value: 2
    opponent: "Opp1"
    period: 1
  },{
    id: "2"
    value: 1
    opponent: "Opp2"
    period: 1
  }];

  this.changeScore = (score) => {
    console.log(score)
    //db.push(post);
  };

  this.scores = () => {
    return db;
  };
}

const score = new Score();

const resolvers = {
  Query: {
    scores(root, args, context) {
      return score.scores();
    }
  },
  Subscription: {
    scoreChanged: {
      subscribe: () => pubsub.asyncIterator([SCORE_CHANGED])
    }
  },
  Mutation: {
    changeScore(root, args, context) {
      pubsub.publish(SCORE_CHANGED, { scoreChanged: args });
      return score.changeScore(args);
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  subscriptions: {
    onConnect: (connectionParams, webSocket, context) => {
      console.log(connectionParams);
    },
    onDisconnect: (webSocket, context) => {
      console.log("disconnected");
    }
  }
});
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
