import { Client } from 'redis-om'
export default defineEventHandler((event) => {
  const client = new Client()
  event.context.redisClient = client
})
