import type { CompatibilityEvent } from 'h3'
import { Entity, Schema } from 'redis-om'
import useRedis from '../utils/useRedis'

export interface User {
  username: string
  password: string
  createdAt: string
  updatedAt: string
  role: string
}
export class User extends Entity {}
const userSchema = new Schema(User, {
  username: {
    type: 'string',
    caseSensitive: true,
  },
  password: {
    indexed: false,
    type: 'string',
    sortable: false,
  },
  createdAt: {
    type: 'date',
  },
  updatedAt: {
    type: 'date',
  },
  role: {
    type: 'string',
  },
})

export const useUsers = async (event: CompatibilityEvent) => {
  const client = await useRedis(event)
  const userRepository = client.fetchRepository(userSchema)
  await userRepository.createIndex()
  return userRepository
}
