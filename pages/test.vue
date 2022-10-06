<script setup lang="ts">
const client = useClient()
const createUser = async () => {
  console.log('creating user')
  const user = await client.mutation('user.createUser', {
    password: 'potato',
    username: 'PotatoHead',
  })
  console.log('user', user)
}

const getUsers = async () => {
  console.log('get users')
  const users = await client.query('user.getUsers')
  console.log('users', users)
}

const getTokenData = async () => {
  console.log('get token data')
  const data = await client.query('auth.getTokenDetails')
  console.log('data', data)
}

// useAsyncData(async () => {
//   await getUsers();
// });
</script>

<template>
  <div>
    <h1>test</h1>
    <div>
      <button class="btn-accent btn" type="button" @click="createUser">
        create user
      </button>
      <button class="btn-accent btn" type="button" @click="getUsers">
        get users
      </button>
      <button class="btn-accent btn" type="button" @click="getTokenData">
        get token data
      </button>
    </div>
  </div>
</template>
