import type { CompatibilityEvent } from 'h3'
import type { Client } from 'redis-om'

export default async function useRedis(event: CompatibilityEvent) {
  const config = useRuntimeConfig()
  const client = event.context.redisClient as Client
  async function cleanup() {
    event.req.removeListener('end', cleanup)
    event.req.removeListener('error', cleanup)
    event.req.removeListener('close', cleanup)
    event.req.removeListener('pause', cleanup)
    event.req.removeListener('resume', setup)
    event.res.removeListener('close', cleanup)
    event.res.removeListener('error', cleanup)
    event.res.removeListener('finish', cleanup)
    if (client.isOpen())
      await client.close()
  }
  async function setup() {
    if (!client.isOpen()) {
      await client.open(config.REDIS_URL)
      event.req.on('end', cleanup)
      event.req.on('error', cleanup)
      event.req.on('close', cleanup)
      event.req.on('pause', cleanup)
      event.req.on('resume', setup)
      event.res.on('close', cleanup)
      event.res.on('error', cleanup)
      event.res.on('finish', cleanup)
    }
  }
  try {
    await setup()
  }
  catch (err) {
    console.error(err)
    await cleanup()
  }
  return client
}
