const { RedisClient } = require("./redisClient.js");
const redisClient = new RedisClient();

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

    scores = scores.map((item) => {
      if (item.id === String(getRandomInt(1, 4))) {
        result = {
          ...item,
          value: getRandomInt(0, 10)
        };

        redisClient.publish("SCORE_CHANGED", { scoreChanged: result });

        return result;
      } else {
        return item;
      }
    });

    redisClient.set("scores", scores);
  }, 3000);
})();
