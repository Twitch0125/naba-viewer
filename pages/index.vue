<template>
  <div class="container max-w-2xl mx-auto mt-6">
    <h1 class="text-base-content mb-4 text-2xl font-medium">
      Welcome to NABA Tools!
    </h1>
    <div
      class="bg-base-100 flex flex-col items-center justify-center max-w-xs rounded shadow"
      style="height: 240px"
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
