const { RedisClient } = require("./redisClient.js");
const redisClient = new RedisClient();

const { SCORE_CHANGED } = require("./constants.js");

function Score() {
  this.changeScore = async (score) => {
    let result = {};
    let scores = await redisClient.get("scores");

    scores = scores.map((item) => {
      if (item.opponent === score.opponent && item.period === score.period) {
        result = {
          ...item,
          value: score.value
        };

        redisClient.publish(SCORE_CHANGED, { scoreChanged: result });
        return result;
      }

      return item;
    });

    redisClient.set("scores", scores);

    return result;
  };

  this.scores = () => {
    return redisClient.get("scores");
  };
}

const scoreController = new Score();

module.exports = {
  scoreController
};
