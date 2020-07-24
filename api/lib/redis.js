const redis = require('redis');

const REDISHOST = process.env.REDISHOST || 'localhost';
const REDISPORT = process.env.REDISPORT || 6379;

const redisClient = redis.createClient(REDISPORT, REDISHOST);

redisClient.on('error', (err) => {
  console.log('Redis error: ', err);
});

module.exports = redisClient;
