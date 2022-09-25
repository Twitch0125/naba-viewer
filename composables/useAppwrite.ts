export default function useAppwrite() {
  const nuxtApp = useNuxtApp();
  return { client: nuxtApp.$appwrite };
}
