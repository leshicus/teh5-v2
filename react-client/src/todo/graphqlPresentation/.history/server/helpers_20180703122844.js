var express = require("express");
var graphqlHTTP = require("express-graphql");
var eventDB = require("./db.json");

const debug = require("debug")("Example_4");

var fakeDB = {};

const loggingMiddleware = ({ ip }, res, next) => {
  next(null, { ip: ip });
};

const sportById = (id) => {
  const sport = eventDB.sports.find((item) => item.id === id);
  return {
    ...sport,
    regions: regionsBySportId(sport.id)
  };
};
const regionById = (id) => {
  const region = eventDB.regions.find((item) => item.id === id);
  return {
    ...region,
    leagues: leaguesByRegionId(region.id)
  };
};
const leagueById = (id) => {
  return eventDB.leagues.find((item) => item.id === id);
};
const eventById = (id) => {
  return eventDB.events.find((item) => item.id === id);
};

const regionsBySportId = (id) => {
  var regions = eventDB.regions.filter((item) => item.sportId === id);
  return regions.map((region) => ({
    ...region,
    leagues: leaguesByRegionId(region.id)
  }));
};

const leaguesByRegionId = (id) => {
  return eventDB.leagues.filter((item) => item.regionId === id);
};

const eventsBySportId = (id) => {
  return eventDB.events.filter((item) => true);
};

module.exports = {
  runApp(schema, root) {
    var app = express();

    app.use(loggingMiddleware);

    app.use(
      "/graphql",
      graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
        pretty: true,
        context: 1
      })
    );

    app.listen(4000);
    debug("Running at localhost/4000/graphql");
  },
  fakeDB,
  eventDB,
  sportById,
  regionById,
  leagueById,
  eventById
};
