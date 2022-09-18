<template>
  <div
    class="sm:items-start container flex flex-col items-center max-w-2xl mx-auto"
  >
    <h1 class="text-base-content mb-4 text-2xl font-medium text-center">
      Welcome to NABA Tools!
    </h1>
    <div class="flex gap-2">
      <div
        class="bg-base-100 flex flex-col items-center justify-center w-full max-w-sm p-6 space-y-4 text-center rounded shadow"
      >
        <nuxt-link
          class="text-base-content600 text-xl font-medium"
          to="/batting"
          >Batting Stats Table</nuxt-link
        >
        <p>
          Upload the batting stat dump from discord and sort by each stat.
          <b>Work in progress.</b>
        </p>
        <nuxt-link class="btn btn-primary btn-md" to="/batting"> Go </nuxt-link>
      </div>
      <div
        class="bg-base-100 flex flex-col items-center justify-center w-full max-w-sm p-6 space-y-4 text-center rounded shadow"
      >
        <nuxt-link
          class="text-base-content600 text-xl font-medium"
          to="/batting"
          >Player Viewer</nuxt-link
        >
        <p>
          <b>Work in progress.</b>
        </p>
        <nuxt-link class="btn btn-primary btn-md" to="/players"> Go </nuxt-link>
      </div>
    </div>
  </div>
</template>
