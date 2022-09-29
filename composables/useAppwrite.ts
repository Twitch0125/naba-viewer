export default function useAppwrite() {
  const nuxtApp = useNuxtApp();
  if (nuxtApp.ssrContext) {
    const { client, account } = nuxtApp.$appwriteServer;
    return { client, account };
  } else {
    const { client, account } = nuxtApp.$appwriteClient;
    return { client, account };
  }
}
