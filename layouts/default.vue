<script setup>
const { data: isAdmin, refresh } = useLazyAsyncData(async () => {
  const isAdmin = await useIsAdmin();
  return isAdmin.value;
});
async function signOut() {
  await $fetch("/api/sessions", { method: "delete" });
  await refresh();
}
</script>
<template>
  <div>
    <BaseHead />
    <div class="flex min-h-screen flex-col bg-base-200 px-4 text-base">
      <nav
        class="container mx-auto my-6 flex max-w-2xl items-center gap-x-3 border-b border-primary border-opacity-10 text-sm font-medium uppercase text-base-content"
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
        <!-- <button v-else @click="signOut">Sign out</button> -->

        <nuxt-link
          to="/admin"
          class="badge-secondary badge badge-sm"
          v-if="isAdmin"
          >admin</nuxt-link
        >
      </nav>
      <nuxt-page />
    </div>
  </div>
</template>
