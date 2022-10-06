// ~/server/trpc/index.ts
import type { inferAsyncReturnType } from '@trpc/server'
import * as trpc from '@trpc/server'
import type { CompatibilityEvent } from 'h3'
import RedisSessions from 'redis-sessions'
import useRedis from '../utils/useRedis'
import { router as user } from './user'
import { router as auth } from './auth'

export async function createContext(event: CompatibilityEvent) {
  const config = useRuntimeConfig()
  const client = await useRedis(event)
  const rs = new RedisSessions({ client })
  const sessionToken = getCookie(event, 'session_token')
  console.log('token', sessionToken)
  if (sessionToken) {
    event.req.session = await new Promise((resolve, reject) => rs.get({
      app: 'naba',
      token: sessionToken,
      ip: 'no_ip',
    }, (err, resp) => {
      err && reject(err)
      return resolve(resp)
    }))
  }
  return {
    event,
    session: event.req.session,
  }
}

export type NitroContext = inferAsyncReturnType<typeof createContext>

export const router = trpc.router<NitroContext>().merge('user.', user).merge('auth.', auth)
