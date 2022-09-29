import { Account, Client } from "appwrite";
export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig();
  let client;
  client = new Client()
    .setEndpoint(config.public.APPWRITE_URL)
    .setProject(config.public.APPWRITE_PROJECT);
  const account = new Account(client);
  return {
    provide: {
      appwriteClient: { client, account },
    },
  };
});
