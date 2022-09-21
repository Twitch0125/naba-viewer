import PocketBase from "pocketbase";
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  return {
    provide: {
      pb: async () => {
        const tokenCookie = useCookie("token-cookie", {
          secure: true,
          sameSite: "strict",
        });
        const modelCookie = useCookie("model-cookie", {
          secure: true,
          sameSite: "strict",
        });
        const client = new PocketBase(config.public.POCKETBASE_URL);
        client.authStore.onChange((token, model) => {
          if (nuxtApp.ssrContext?.event?.res) {
            nuxtApp.ssrContext.event.res.setHeader(
              "set-cookie",
              client.authStore.exportToCookie()
            );
            tokenCookie.value = token;
            modelCookie.value = model;
          }
        });
        if (nuxtApp.ssrContext) {
          const cookieHeader = nuxtApp.ssrContext?.event?.req?.headers?.cookie;
          if (cookieHeader) {
            client.authStore.loadFromCookie(cookieHeader);
          }
        } else if (tokenCookie.value && modelCookie.value) {
          client.authStore.save(tokenCookie.value, modelCookie.value);
        }
        return client;
      },
    },
  };
});
