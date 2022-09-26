import { Client } from "appwrite";
export default defineNuxtPlugin((nuxtApp) => {
  if (!nuxtApp.ssrContext) {
    const config = useRuntimeConfig();
    const client = new Client()
      .setEndpoint(config.public.APPWRITE_URL)
      .setProject(config.public.APPWRITE_PROJECT);
    return {
      provide: {
        appwrite: client,
      },
    };
  }
});
