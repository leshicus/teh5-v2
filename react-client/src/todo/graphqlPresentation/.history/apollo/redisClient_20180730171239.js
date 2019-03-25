const redis = require("redis");
const { RedisPubSub } = require("graphql-redis-subscriptions");
const { promisify } = require("util");

// pubsub.publish(SCORE_CHANGED, { scoreChanged: result });
// await redisClient.flushdb();
// redisClient.set(key, JSON.stringify(db[key]));
// await getAsync("scores")
function RedisClient() {
  const redisClient = redis.createClient();
  const getAsync = promisify(redisClient.get).bind(redisClient);
  const pubsub = new RedisPubSub();

  get = async (key) => {
    return JSON.parse(await getAsync(key));
  };

  set = (key, value) => {
    return redisClient.set(key, JSON.stringify(value));
  };

  publish = (key, obj) => {
    // pubsub.publish(SCORE_CHANGED, { scoreChanged: result });
    return pubsub.publish(key, obj);
  };

  flushdb = () => {
    redisClient.flushdb();
  };
}

module.exports = {
  RedisClient
};
