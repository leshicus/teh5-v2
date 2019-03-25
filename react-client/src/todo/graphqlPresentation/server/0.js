var { graphql, buildSchema } = require("graphql");

var schema = buildSchema(`
  type Query{
    hello: String
  }
`);

var root = {
  hello: () => {
    return "Hi!";
  }
};

graphql(schema, "{hello}", root).then((resp) => {
  console.log(resp);
});
