<template>
  <Head>
    <Html data-theme="winter" />
  </Head>
  <div class="bg-base-200 flex flex-col min-h-screen px-4 text-base">
    <nav
      class="text-base-content border-primary border-opacity-10 container max-w-2xl mx-auto my-6 space-x-3 text-sm font-medium uppercase border-b"
    >
      <nuxt-link class="hover:underline" to="/">Home</nuxt-link>
      <a
        class="hover:underline"
        href="https://github.com/Twitch0125/naba-viewer/issues/new"
        >Report a bug/Give feedback</a
      >
    </nav>
    <nuxt-page />
  </div>
</template>
