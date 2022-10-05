<script setup>
import { LockClosedIcon } from '@heroicons/vue/24/outline/index.js'
const username = ref()
const password = ref()
const confirmPassword = ref()

const errorMessage = ref()

const submit = async () => {
  const client = useClient()
  let data
  try { data = await client.mutation('user.createUser', { password: password.value, username: username.value }) }
  catch (err) {
    data = err.data
  }
  console.log('data', data)
}
</script>

<template>
  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form class="space-y-6" @submit.prevent="submit">
        <div>
          <label for="username" class="block text-sm font-medium text-base-content">Username*</label>
          <div class="mt-1">
            <input
              id="username" v-model="username" name="username" autocomplete="username" required="" class="
              block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm
              placeholder:text-gray-400
              focus:border-primary focus:outline-none focus:ring-primary
              sm:text-sm"
            >
          </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-base-content">Password*</label>
          <div class="mt-1">
            <input
              id="password" v-model="password" name="password" type="password" autocomplete="new-password"
              required=""
              class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            >
          </div>
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-base-content">Confirm Password*</label>
          <div class="mt-1">
            <input
              id="passwordConfirm" v-model="confirmPassword" name="passwordConfirm" type="password"
              autocomplete="new-password" required=""
              class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            >
          </div>
        </div>
        <div>
          <button
            type="submit"
            class="flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <LockClosedIcon class="h-6 w-6" />
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
