const redis = require("redis");
const { RedisPubSub } = require("graphql-redis-subscriptions");
const { promisify } = require("util");

const redisClient = redis.createClient();
const getAsync = promisify(redisClient.get).bind(redisClient);
const pubsub = new RedisPubSub();
// pubsub.publish(SCORE_CHANGED, { scoreChanged: result });
// await redisClient.flushdb();
// redisClient.set(key, JSON.stringify(db[key]));
// await getAsync("scores")
function RedisClient() {
  this.get = async (key) => {
    return JSON.parse(await getAsync(key));
  };

  this.set = (key, value) => {
    return redisClient.set(key, JSON.stringify(value));
  };

  this.publish = (key, obj) => {
    // pubsub.publish(SCORE_CHANGED, { scoreChanged: result });
    return pubsub.publish(key, obj);
  };

  this.flushdb = async () => {
    return await redisClient.flushdb();
  };
}

module.exports = {
  RedisClient
};
