<template>
  <Head>
    <Html data-theme="winter" />
  </Head>
  <div class="bg-base-200 flex flex-col min-h-screen text-base">
    <nav
      class="text-base-content container max-w-2xl mx-auto mt-6 text-sm font-medium uppercase"
    >
      <nuxt-link to="/">Home</nuxt-link>
    </nav>
    <nuxt-page />
  </div>
</template>
