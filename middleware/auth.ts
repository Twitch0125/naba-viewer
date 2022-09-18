export default defineNuxtRouteMiddleware(async () => {
  //   return navigateTo("/", { redirectCode: 401 });
  const { loggedIn } = await usePB();
  if (!loggedIn.value) {
    return navigateTo("/login", { redirectCode: 401 });
  }
});
