const redis = require("redis");

const { promisify } = require("util");
const redisClient = redis.createClient();
const getAsync = promisify(redisClient.get).bind(redisClient);

const db = require("./db.json");

async () => {
  redisClient.flushdb();
};

for (const key in db) {
  redisClient.set(key, JSON.stringify(db[key]));
}

let scores = JSON.parse(redisClient.get("scores"));
console.log(scores);
const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};

setInterval(() => {
  scores = scores.map((item) => {
    if (item.id === String(getRandomArbitrary(1, 4))) {
      return {
        ...item,
        value: getRandomArbitrary(0, 10)
      };
    } else {
      return item;
    }
  });

  redisClient.set("scores", JSON.stringify(scores));
}, 1000);
