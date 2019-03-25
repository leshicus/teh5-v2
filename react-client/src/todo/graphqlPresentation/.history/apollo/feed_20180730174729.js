// const redis = require("redis");
// const { RedisPubSub } = require("graphql-redis-subscriptions");
// const { promisify } = require("util");
// const redisClient = redis.createClient();
// const getAsync = promisify(redisClient.get).bind(redisClient);
// const pubsub = new RedisPubSub();
const { RedisClient } = require("./redisClient.js");
const redisClient = new RedisClient();

const SCORE_CHANGED = "SCORE_CHANGED";
const db = require("./db.json");

const getRandomInt = (min, max) => {
  return Math.ceil(Math.random() * (max - min) + min);
};

(async () => {
  await redisClient.flushdb();

  for (const key in db) {
    redisClient.set(key, db[key]);
  }

  let scores = await redisClient.get("scores");

  setInterval(() => {
    let result = {};
    console.log(scores);
    scores = scores.map((item) => {
      if (item.id === String(getRandomInt(1, 4))) {
        result = {
          ...item,
          value: getRandomInt(0, 10)
        };

        redisClient.publish(SCORE_CHANGED, { scoreChanged: result });

        return result;
      } else {
        return item;
      }
    });

    redisClient.set("scores", scores);
  }, 3000);
})();
