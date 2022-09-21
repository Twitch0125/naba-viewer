<template>
  <div>
    <BaseHead />
    <div class="bg-base-200 flex flex-col min-h-screen px-4 text-base">
      <nav
        class="text-base-content border-primary border-opacity-10 container max-w-2xl mx-auto my-6 gap-x-3 text-sm font-medium uppercase border-b flex items-center"
      >
        <nuxt-link class="hover:underline" to="/">Home</nuxt-link>
        <a
          class="hover:underline"
          href="https://github.com/Twitch0125/naba-viewer/issues/new"
          >Report a bug/Give feedback</a
        >
        <div class="flex-grow"></div>
        <nuxt-link class="hover:underline" to="/signin"
          >Signin / Register</nuxt-link
        >
      </nav>
      <nuxt-page />
    </div>
  </div>
</template>
