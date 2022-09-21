import authenticateUser from "../utils/authenticateUser";
import usePBAdmin from "../utils/usePBAdmin";

export default defineEventHandler(async (event) => {
  const client = await usePBAdmin();
  const body = await useBody(event);
  await client.users.create(body);
  const userClient = await authenticateUser(event);
  setHeader(event, "set-cookie", userClient.authStore.exportToCookie());
  return sendRedirect(event, "/");
});
