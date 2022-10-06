import * as trpc from '@trpc/server'
import { z } from 'zod' //  yup/superstruct/zod/myzod/custom
import argon2 from 'phc-argon2'
import RedisSessions from 'redis-sessions'
import { useUsers } from '../db/user'
import useRedis from '../utils/useRedis'
import type { NitroContext } from './index'
export const router = trpc
  .router<NitroContext>()
  .mutation('creatSession', {
    input: z.object({
      username: z.string(),
      password: z.string(),
    }),
    async resolve(req) {
      const config = useRuntimeConfig()
      const usersRepo = await useUsers(req.ctx.event)
      const user = await usersRepo.search().where('username').equals(req.input.username).return.first()
      if (user && argon2.verify(user?.password, req.input.password)) {
        // createSession()
        const client = await useRedis(req.ctx.event)
        const rs = new RedisSessions({ client })
        const { token } = await new Promise((resolve, reject) => {
          rs.create({
            app: 'naba',
            id: user.entityId,
            ttl: 3600,
            ip: 'no_ip',
            d: {
              username: user.username,
              role: user.role,
            },
          },
          (err, res) => {
            err && reject(err)
            return resolve(res)
          },
          )
        })

        setCookie(req.ctx.event, 'session_token', token, { secure: true, httpOnly: true, sameSite: 'strict' })
        return sendRedirect(req.ctx.event, '/')
      }
      throw new trpc.TRPCError({ code: 'BAD_REQUEST', message: 'invalid username or password' })
    },
  }).query('getTokenDetails', {
    resolve(req) {
      return req.ctx.session?.d
    },
  })
