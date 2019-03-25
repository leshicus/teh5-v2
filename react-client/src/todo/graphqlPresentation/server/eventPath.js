var { buildSchema } = require("graphql");
var { runApp, fakeDB } = require("./eventPathHelpers");
var redis = require("redis");
const { promisify } = require("util");

// We expect a value 'foo': 'bar' to be present
// So instead of writing client.get('foo', cb); you have to write:
// return getAsync('foo').then(function(res) {
//     console.log(res); // => 'bar'
// });

// async myFunc() {
//     const res = await getAsync('foo');
//     console.log(res);
// }

var schema = buildSchema(`
  type SportType{
    id: String!
    description: String
  }

  type Query{
    sports: [SportType]
  }
`);

var root = {
  sports: (params, context) => {
    // console.log(context);
    // var redisClient = redis.createClient();
    var getAsync = promisify(context.get).bind(context);

    getAsync("sports").then(function(res) {
      console.log(res);
      return res;
    });
    // var onAsync = promisify(redisClient.on).bind(redisClient);

    // return onAsync("connect", function() {
    // redisClient.get("sports", (err, reply) => {
    //   var repl = JSON.parse(reply);
    //   return [
    //     { id: "1", description: "football" },
    //     { id: "2", description: "hockey" },
    //     { id: "3", description: "tennis" }
    //   ];
    //   // return repl;
    // });
    //   return [
    //     { id: "1", description: "football" },
    //     { id: "2", description: "hockey" },
    //     { id: "3", description: "tennis" }
    //   ];
    // });

    // redisClient.on("connect", function() {
    //   redisClient.get("sports", (err, reply) => {
    //     var repl = JSON.parse(reply);
    //     return [
    //       { id: "1", description: "football" },
    //       { id: "2", description: "hockey" },
    //       { id: "3", description: "tennis" }
    //     ];
    //     // return repl;
    //   });
    //   return [
    //     { id: "1", description: "football" },
    //     { id: "2", description: "hockey" },
    //     { id: "3", description: "tennis" }
    //   ];
    // });
    // return [{ id: "1", description: "123" }];
  }
};

runApp(schema, root);

// client.on("connect", function() {
//   intGetFromRedis = setInterval(() => {
//     client.get("sports", redis.print);
//   }, 3000);
// });
