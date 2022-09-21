import usePBAdmin from "../utils/usePBAdmin";

export default defineEventHandler(async (event) => {
  const client = await usePBAdmin();
  const body = await useBody(event);
  await client.users.create(body);
  return $fetch("/api/sessions", { body });
});
