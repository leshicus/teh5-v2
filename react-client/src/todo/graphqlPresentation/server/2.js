// simple mutations

var { buildSchema } = require("graphql");
var { runApp } = require("./helpers");

// Query is obligatory
var schema = buildSchema(`
  type Mutation{
    setMessage(param: String): String
    getMessage: String
  }

  type Query{
    getMessage: String
  }
`);

var fakeDB = {};

var root = {
  getMessage: async () => {
    return fakeDB.message;
  },
  setMessage: async ({ param }) => {
    fakeDB.message = param;
    return param;
  }
};

runApp(schema, root);
