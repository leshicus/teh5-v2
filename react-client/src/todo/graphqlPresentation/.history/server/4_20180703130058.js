var { buildSchema } = require("graphql");
var {
  runApp,
  eventDB,
  sportById,
  regionById,
  leagueById,
  eventById
} = require("./helpers");

var schema = buildSchema(`
  type SportType{
    id: String!
    description: String
    regions: [RegionType]
  }
  type RegionType{
    id: String!
    description: String
    sportId: Int
    leagues: [LeagueType]
  }
  type LeagueType{
    id: String!
    description: String
    regionId: Int
  }
  type EventType{
    id: String!
    description: String
    leagueId: Int
    startDate: String
  }

  type Query{
    sports: [SportType]
    regions: [RegionType]
    leagues: [LeagueType]
    events: [EventType]

    sportById(id: String): SportType
    regionById(id: String): RegionType
    leagueById(id: String): LeagueType
    eventById(id: String): EventType
  }
`);

var root = {
  sports: (param, { selections }) => {
    console.log(selections);
    return eventDB.sports.map((sport) => ({
      id: sport.id
    }));
  },
  regions: () => {
    return eventDB.regions.map((region) => ({
      ...regionById(region.id)
    }));
  },
  leagues: () => {
    return eventDB.leagues;
  },
  events: () => {
    return eventDB.events;
  },

  sportById: ({ id }, context) => {
    return sportById(id);
  },
  regionById: ({ id }) => {
    return regionById(id);
  },
  leagueById: ({ id }) => {
    return leagueById(id);
  },
  eventById: ({ id }) => {
    return eventById(id);
  }
};

runApp(schema, root);
