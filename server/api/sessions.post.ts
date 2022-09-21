import Pocketbase from "pocketbase";
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const client = new Pocketbase(config.public.POCKETBASE_URL);
  const body = await useBody(event);
  await client.users.authViaEmail(body.email, body.password);
  setHeader(event, "set-cookie", client.authStore.exportToCookie());
  return sendRedirect(event, "/");
});
