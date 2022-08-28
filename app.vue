<template>
  <Head>
    <Html data-theme="winter" />
  </Head>
  <div class="bg-base-200 flex flex-col min-h-screen text-base">
    <nav
      class="text-base-content container max-w-2xl mx-auto mt-6 space-x-3 text-sm font-medium uppercase"
    >
      <nuxt-link class="hover:underline" to="/">Home</nuxt-link>
      <a
        class="hover:underline"
        href="https://github.com/Twitch0125/naba-viewer/issues/new"
        >Report a bug</a
      >
    </nav>
    <nuxt-page />
  </div>
</template>
