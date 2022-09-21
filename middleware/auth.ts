export default defineNuxtRouteMiddleware(async (middleware) => {
  //   return navigateTo("/", { redirectCode: 401 });
  const { client, loggedIn } = await usePB();
  if (!loggedIn.value) {
    return navigateTo("/signin", { redirectCode: 401 });
  }
});
