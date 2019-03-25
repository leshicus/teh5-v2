const redis = require("redis");
const redisClient = redis.createClient();

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
