import * as trpc from '@trpc/server'
import { Schema, z } from 'zod' //  yup/superstruct/zod/myzod/custom
import argon2 from 'phc-argon2'
import { useUsers } from '../db/user'
import type { NitroContext } from './index'

export const router = trpc
  .router<NitroContext>()
  .query('getUsers', {
    async resolve(req) {
      const userRepository = await useUsers(req.ctx.event)
      const users = await userRepository.search().return.all()
      return users
    },
  })
  .mutation('createUser', {
    // validate input with Zod
    input: z.object({
      username: z.string().min(5),
      password: z.string().transform<string>(async (value) => {
        return await argon2.hash(value)
      }),
    }),
    async resolve(req) {
      const userRepository = await useUsers(req.ctx.event)
      // make sure username is available
      const existingUser = await userRepository.search().where('username').equals(req.input.username).return.first()
      if (!existingUser) {
        const { username, role, entityId } = await userRepository.createAndSave({ username: req.input.username, password: req.input.password, role: 'user' })
        return { username, role, entityId }
      }

      throw new trpc.TRPCError({ code: 'BAD_REQUEST', message: 'username is already taken' })
    },
  })
