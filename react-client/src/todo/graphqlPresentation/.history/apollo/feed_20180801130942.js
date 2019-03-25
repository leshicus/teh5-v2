const { RedisClient } = require("./redisClient.js");
const redisClient = new RedisClient();

const { SCORE_CHANGED, MARKET_CHANGED } = require("./constants.js");

const db = require("./db.json");

const getRandomInt = (min, max) => {
  return Math.ceil(Math.random() * (max - min) + min);
};

const startScoresFeed = async (period) => {
  let scores = await redisClient.get("scores");

  setInterval(() => {
    let result = {};

    scores = scores.map((item) => {
      if (item.id === String(getRandomInt(1, 8))) {
        result = {
          ...item,
          value: getRandomInt(0, 5)
        };

        redisClient.publish(SCORE_CHANGED, { scoreChanged: result });

        return result;
      } else {
        return item;
      }
    });

    redisClient.set("scores", scores);
  }, period);
};

const startMarketsFeed = async (period) => {
  let markets = await redisClient.get("markets");

  setInterval(() => {
    let result = {},
      len = markets.length,
      newMarket = {
        id: len + 1,
        description: "market " + (len + 1),
        eventId: String(getRandomInt(0, 2))
      };

    markets.push(newMarket);

    redisClient.set("markets", markets);
    redisClient.publish(MARKET_CHANGED, { marketChanged: newMarket });
  }, period);
};

(async () => {
  await redisClient.flushdb();

  for (const key in db) {
    redisClient.set(key, db[key]);
  }

  startScoresFeed(1000);
  startMarketsFeed(1000);
})();
