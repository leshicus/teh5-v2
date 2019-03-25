const { RedisClient } = require("./redisClient.js");
const redisClient = new RedisClient();

const { SCORE_CHANGED, MARKET_CHANGED } = require("./constants.js");

const db = require("./db.json");

const getRandomInt = (min, max) => {
  return Math.ceil(Math.random() * (max - min) + min);
};

const startScoresFeed =()=>{
  let scores = await redisClient.get("scores");

  setInterval(() => {
    let result = {};

    scores = scores.map((item) => {
      if (item.id === String(getRandomInt(1, 8))) {
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
  }, 1000);
}

const  startMarketsFeed=()=>{
  let markets = await redisClient.get("markets");

  setInterval(() => {
    let result = {};

    
 
    redisClient.set("scores", scores);
  }, 1000);
}

(async () => {
  await redisClient.flushdb();

  for (const key in db) {
    redisClient.set(key, db[key]);
  }

  startScoresFeed();
  startMarketsFeed();
  

  
})();
