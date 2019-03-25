const { ApolloServer } = require("apollo-server");
const { mergeSchemas } = require("graphql-tools");

const { sportSchema } = require("./schemas/sportSchema");
const { regionSchema } = require("./schemas/regionSchema");
const { subscriptionSchema } = require("./schemas/subscriptionSchema");
const feed = require("./feed.js");

const linkTypeDefs = `
  extend type Sport {
    regions: [Region]
  }

  extend type Region {
    sport: Sport
  }
`;

const schema = mergeSchemas({
  schemas: [sportSchema, regionSchema, subscriptionSchema, linkTypeDefs],
  resolvers: {
    Sport: {
      regions: {
        // fragment: `fragment SportFragment on Sport { id }`,
        resolve(sport, args, context, info) {
          console.log("Sport.regions", sport);

          return info.mergeInfo.delegateToSchema({
            schema: regionSchema,
            operation: "query",
            fieldName: "getRegionsBySportId",
            args: {
              id: sport.id
            },
            context,
            info
          });
        }
      }
    },
    Region: {
      sport: {
        fragment: `fragment RegionFragment on Region { sportId }`,
        resolve(region, args, context, info) {
          console.log("Region.sport", region);

          return info.mergeInfo.delegateToSchema({
            schema: sportSchema,
            operation: "query",
            fieldName: "getSportById",
            args: {
              id: region.sportId
            },
            context,
            info
          });
        }
      }
    }
  }
});

const server = new ApolloServer({
  schema,
  subscriptions: {
    onConnect: (connectionParams, webSocket, context) => {
      console.log("connectionParams: ", connectionParams);
    },
    onDisconnect: (webSocket, context) => {
      console.log("disconnected");
    }
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
