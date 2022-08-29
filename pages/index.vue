<template>
  <div
    class="sm:items-start container flex flex-col items-center max-w-2xl mx-auto"
  >
    <h1 class="text-base-content mb-4 text-2xl font-medium text-center">
      Welcome to NABA Tools!
    </h1>
    <div
      class="bg-base-100 flex flex-col items-center justify-center w-full max-w-sm py-6 rounded shadow"
    >
      <nuxt-link
        class="text-base-content600 mb-2 text-xl font-medium"
        to="/batting"
        >Batting Stats Table</nuxt-link
      >
      <nuxt-link class="btn btn-primary btn-md" to="/batting"> Go </nuxt-link>
    </div>
  </div>
</template>
