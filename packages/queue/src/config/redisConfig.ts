import dotenv from "dotenv";

/** @type {import("bullmq").RedisOptions} */
export const getRedisConfig = () => ({
  password: String(process.env.REDIS_PASSWORD),
  host: String(process.env.REDIS_HOST),
  port: Number(process.env.REDIS_PORT),
});

// console.log("Redis Config");

