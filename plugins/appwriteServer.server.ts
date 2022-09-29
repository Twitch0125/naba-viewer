import { Account, Client } from "node-appwrite";
export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig();
  const event = nuxtApp.ssrContext.event;
  let client = new Client()
    .setEndpoint(config.public.APPWRITE_URL)
    .setProject(config.public.APPWRITE_PROJECT);
  //if we have an Authorization Header, use it
  if (event.req.headers["authorization"]) {
    client = client.setJWT(event.req.headers["authorization"]);
  } else {
    //check for the cookie
    const { ["appwrite_jwt"]: jwt } = await $fetch(
      "/get-cookie?keys=appwrite_jwt",
      {
        method: "GET",
        headers: useRequestHeaders(["cookie"]),
      }
    );
    client = client.setJWT(jwt);
  }
  const account = new Account(client);
  return {
    provide: {
      appwriteServer: { client, account },
    },
  };
});
