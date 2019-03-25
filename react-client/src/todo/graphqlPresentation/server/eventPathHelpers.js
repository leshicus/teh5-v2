var express = require("express");
var graphqlHTTP = require("express-graphql");
var redis = require("redis");
var fakeDB = require("./db.json");

var intSaveToRedis;

var runFeed = () => {
  var redisClient = redis.createClient();

  redisClient.on("connect", function() {
    intSaveToRedis = setInterval(() => {
      redisClient.set("sports", JSON.stringify(fakeDB.sports));
      redisClient.set("regions", JSON.stringify(fakeDB.regions));
      redisClient.set("leagues", JSON.stringify(fakeDB.leagues));
      redisClient.set("events", JSON.stringify(fakeDB.events));
    }, 1000);

    // client.get("dbEventPath", redis.print);
  });
};

module.exports = {
  runApp(schema, root) {
    var app = express();

    var redisClient = redis.createClient();

    app.use(
      "/graphql",
      graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
        pretty: true,
        context: { redisClient }
      })
    );

    app.listen(4000);
    console.log("Running at localhost/4000/graphql");

    runFeed();
  },
  fakeDB
};
