const { makeExecutableSchema } = require("graphql-tools");
const { withFilter } = require("apollo-server");

const { RedisClient } = require("../redisClient.js");
const redisClient = new RedisClient();

const { SCORE_CHANGED, MARKET_CHANGED } = require("../constants.js");
const { scoreController } = require("../scoreController.js");

const subscriptionSchema = makeExecutableSchema({
  typeDefs: `
    type Score {
      id: ID!
      value: Int
      opponent: String
      period: Int
      eventId: ID!
    }

    type Market {
      id: ID!
      description: String
      eventId: ID!
    }

    type Subscription {
      scoreChanged(eventId: ID!): Score,
      marketChanged(eventId: ID!): Market,
    }

    type Mutation {
      changeScore (limit: Int!, opponent: String, period: Int, value: Int): Score
    }

    type Query {
      getScores: [Score],
      getMarkets: [Market]
      #getScoreById(id: ID!): Score
    }
  `,
  resolvers: {
    Query: {
      getScores: async (parent, { id }, context, info) => {
        console.log("Query.getScores");
        return redisClient.get("scores");
      },
      getMarkets: async (parent, { id }, context, info) => {
        console.log("Query.getMarkets");
        return redisClient.get("markets");
      }
    },
    Subscription: {
      scoreChanged: {
        subscribe: withFilter(
          (_, variables) => {
            return redisClient.asyncIterator([SCORE_CHANGED]);
          },
          (payload, variables) => {
            return payload.scoreChanged.eventId === variables.eventId;
          }
        )
      },
      marketChanged: {
        subscribe: withFilter(
          (_, variables) => {
            return redisClient.asyncIterator([MARKET_CHANGED]);
          },
          (payload, variables) => {
            return payload.marketChanged.eventId === variables.eventId;
          }
        )
      }
    },
    Mutation: {
      changeScore(root, args, context) {
        if (args.limit > 10) {
          console.log("Error: limit > 10";
        }
        return scoreController.changeScore(args);
      }
    }
  }
});

module.exports = {
  subscriptionSchema
};
