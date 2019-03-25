// simple queries
var express = require("express");
var graphqlHTTP = require("express-graphql");
var { buildSchema } = require("graphql");

var schema = buildSchema(`
  type Query{
    hello: String
    greet(param: String, p2: Int!): String
    double(param: Int!): Int
  }
`);

var root = {
  hello: (params, { token }) => {
    return "Hi!";
  },
  greet: ({ param }, { token }) => {
    if (token) {
      return `Hi, ${param}`;
    } else {
      return `I don't know you`;
    }
  },
  double: ({ param }, { token }) => {
    if (token) {
      return param * 2;
    } else {
      return `I don't know you`;
    }
  }
};

var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
    pretty: true,
    context: { token: "22222" }
  })
);
app.listen(4000);
console.log("Running at localhost/4000/graphql");
