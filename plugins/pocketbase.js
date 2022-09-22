import PocketBase from "pocketbase";
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const tokenCookie = useTokenCookie();
  const modelCookie = useModelCookie();
  const client = new PocketBase(config.public.POCKETBASE_URL);
  client.authStore.onChange((token, model) => {
    if (nuxtApp.ssrContext?.event?.res) {
      nuxtApp.ssrContext.event.res.setHeader(
        "set-cookie",
        client.authStore.exportToCookie()
      );
      token && (tokenCookie.value = token);
      model && (modelCookie.value = model);
    }
  });


  if (nuxtApp.ssrContext) {
    const cookieHeader = nuxtApp.ssrContext?.event?.req?.headers?.cookie;
    const pb_auth = useCookie("pb_auth");
    if (pb_auth.value) {
      client.authStore.loadFromCookie(cookieHeader);
    } else if (tokenCookie.value && modelCookie.value) {
      client.authStore.save(tokenCookie.value, modelCookie.value);
    }
  } else if (tokenCookie.value && modelCookie.value) {
    client.authStore.save(tokenCookie.value, modelCookie.value);
  }

  return {
    provide: {
      pb: client,
    },
  };
});
