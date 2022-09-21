import authenticateUser from "../utils/authenticateUser";

export default defineEventHandler(async (event) => {
  const client = await authenticateUser(event);
  setHeader(event, "set-cookie", client.authStore.exportToCookie());
  return sendRedirect(event, "/");
});
