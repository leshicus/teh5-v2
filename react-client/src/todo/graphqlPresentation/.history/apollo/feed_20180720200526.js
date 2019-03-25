let redis = require("redis");
let { RedisPubSub } = require("graphql-redis-subscriptions");
let { promisify } = require("util");
let redisClient = redis.createClient();
let getAsync = promisify(redisClient.get).bind(redisClient);
let pubsub = new RedisPubSub();
let SCORE_CHANGED = "Score_change";
let db = require("./db.json");

let getRandomArbitrary = (min, max) => {
  return Math.ceil(Math.random() * (max - min) + min);
};

(async () => {
  await redisClient.flushdb();

  for (let key in db) {
    redisClient.set(key, JSON.stringify(db[key]));
  }

  let scores = JSON.parse(await getAsync("scores"));

  setInterval(() => {
    let result = {};

    scores = scores.map((item) => {
      if (item.id === String(getRandomArbitrary(1, 4))) {
        result = {
          ...item,
          value: getRandomArbitrary(0, 10)
        };

        pubsub.publish(SCORE_CHANGED, { scoreChanged: result });

        return result;
      } else {
        return item;
      }
    });

    redisClient.set("scores", JSON.stringify(scores));
  }, 3000);
})();
