<script setup>
const loggedIn = false
</script>

<template>
  <div>
    <BaseHead />
    <div class="flex min-h-screen flex-col bg-base-200 px-4 text-base">
      <nav
        class="container mx-auto my-6 flex max-w-2xl items-center gap-x-3 border-b border-primary border-opacity-10 text-sm font-medium uppercase text-base-content"
      >
        <nuxt-link class="hover:underline" to="/">
          Home
        </nuxt-link>
        <a
          class="hover:underline"
          href="https://github.com/Twitch0125/naba-viewer/issues/new"
        >Report a bug/Give feedback</a>
        <div class="grow" />
        <nuxt-link v-if="!loggedIn" class="hover:underline" to="/signin">
          Signin / Register
        </nuxt-link>
        <button v-else>
          Sign out
        </button>
      </nav>
      <nuxt-page />
    </div>
  </div>
</template>
