const redis = require("redis");

const { promisify } = require("util");
const redisClient = redis.createClient();
const getAsync = promisify(redisClient.get).bind(redisClient);
const pubsub = new RedisPubSub();
const SCORE_CHANGED = "Score_change";
const db = require("./db.json");

const getRandomArbitrary = (min, max) => {
  return Math.ceil(Math.random() * (max - min) + min);
};

(async () => {
  await redisClient.flushdb();

  for (const key in db) {
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

        return result;
      } else {
        return item;
      }
    });

    redisClient.set("scores", JSON.stringify(scores));
    pubsub.publish(SCORE_CHANGED, { scoreChanged: result });
  }, 1000);
})();
