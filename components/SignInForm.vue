<script setup>
import { ExclamationTriangleIcon } from '@heroicons/vue/20/solid'
import { useUserStore } from '~~/stores/userStore'
const client = useClient()
const username = ref()
const password = ref()
const errors = ref()
const submit = async () => {
  try {
    await client.mutation('auth.creatSession', { username: username.value, password: password.value })
    await useUserStore().getUserDetails()
    const router = useRouter()
    router.replace('/')
  }
  catch (err) {
    errors.value = err.message
  }
}
</script>

<template>
  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form class="space-y-6" @submit.prevent="submit">
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
          <div class="mt-1">
            <input
              id="username"
              v-model="username"
              name="username"
              type="username"
              autocomplete="username"
              required
              class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            >
          </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <div class="mt-1">
            <input
              id="password"
              v-model="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            >
          </div>
        </div>

        <div>
          <label class="cursor-pointer">
            <input
              name="admin"
              type="checkbox"
              class="checkbox-primary checkbox checkbox-sm"
            >
            <span class="label-text ml-2"> Admin </span>
          </label>
        </div>

        <!-- <div class="flex items-center justify-between">
          <div class="text-sm">
            <a
              href="#"
              class="font-medium text-primary hover:text-primary-focus"
              >Forgot your password?</a
            >
          </div>
        </div> -->
        <div v-if="errors">
          <div class="rounded bg-red-50 px-4 py-2 text-red-800">
            <p><ExclamationTriangleIcon class="mr-2 inline h-5 w-5" /> {{ errors }}</p>
          </div>
        </div>
        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-focus focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Sign in
          </button>
        </div>
      </form>
      <!-- identiy providers -->
      <!-- <div v-if="discordProvider" class="mt-6">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300" />
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="bg-white px-2 text-gray-500">Or continue with</span>
          </div>
        </div>

        <div class="mt-6 gap-3">
          <div>
            <a
              :href="authUrl"
              class="inline-flex w-full justify-center gap-2 rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
              @click="saveProvider"
            >
              <DiscordIcon class="h-5 w-5" />
              <span>Sign in with Discord</span>
            </a>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
