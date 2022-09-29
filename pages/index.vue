<script setup>
const { client, account } = useAppwrite();
const { data } = await useAsyncData(async () => {
  console.log("client");
  return await account.get();
});
watch(data, console.log);
const getSession = async () => {
  const res = await account.get();
  console.log("res", res);
  return res;
};
</script>
<template>
  <div
    class="container mx-auto flex max-w-2xl flex-col items-center sm:items-start"
  >
    <h1 class="mb-4 text-center text-2xl font-medium text-base-content">
      <!-- <span v-if="!loggedIn"> Welcome to NABA Tools! </span> -->
      <!-- <span v-else> Welcome back, {{ client.authStore.model.email }} </span> -->
    </h1>
    <div class="flex gap-2">
      <button class="btn btn-primary btn-lg" @click="getSession">
        Get Session
      </button>
      <div
        class="flex w-full max-w-sm flex-col items-center justify-center space-y-4 rounded bg-base-100 p-6 text-center shadow"
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
        class="flex w-full max-w-sm flex-col items-center justify-center space-y-4 rounded bg-base-100 p-6 text-center shadow"
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
