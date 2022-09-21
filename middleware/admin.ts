export default defineNuxtRouteMiddleware(async (middleware) => {
  const { client, loggedIn } = usePB();
  const isAdmin = await useIsAdmin();
  try {
    await client.admins.refresh();
    isAdmin.value = true;
  } catch (err) {
    isAdmin.value = false;
  }

  if (!loggedIn.value || !isAdmin.value) {
    return navigateTo("/", { redirectCode: 401 });
  }
});
