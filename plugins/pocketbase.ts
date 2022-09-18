import PocketBase from "pocketbase";
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  return {
    provide: {
      pb: () => {
        const client = new PocketBase(config.public.POCKETBASE_URL);
        client.authStore.loadFromCookie(
          nuxtApp.ssrContext?.event?.req?.headers?.cookie || ""
        );

        client.authStore.onChange(() => {
          if (nuxtApp.ssrContext?.event?.res) {
            nuxtApp.ssrContext.event.res.setHeader(
              "set-cookie",
              client.authStore.exportToCookie()
            );
          }
        });
        return client;
      },
    },
  };
});
