const { RedisPubSub } = require("graphql-redis-subscriptions");
const { promisify } = require("util");
const redisClient = redis.createClient();
const getAsync = promisify(redisClient.get).bind(redisClient);
const pubsub = new RedisPubSub();

function Score() {
  this.changeScore = async (score) => {
    let result = {};
    let scores = JSON.parse(await getAsync("scores"));

    scores = scores.map((item) => {
      if (item.opponent === score.opponent && item.period === score.period) {
        result = {
          ...item,
          value: score.value
        };

        pubsub.publish(SCORE_CHANGED, { scoreChanged: result });
        return result;
      }

      return item;
    });

    redisClient.set("scores", JSON.stringify(scores));

    return result;
  };

  this.scores = async () => {
    return JSON.parse(await getAsync("scores"));
  };
}

const scoreController = new Score();

module.exports = {
  scoreController
};
