export default async function usePB() {
  const nuxtApp = useNuxtApp();
  const client = await nuxtApp.$pb();
  const loggedIn = ref(client.authStore.isValid);

  client.authStore.onChange(() => {
    loggedIn.value = client.authStore.isValid;
  });

  return { client, loggedIn };
}
