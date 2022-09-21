import PocketBase from "pocketbase";
export default async function usePBAdmin() {
  const config = useRuntimeConfig();
  const client = new PocketBase(config.public.POCKETBASE_URL);
  try {
    await client.admins.authViaEmail(config.ADMIN_EMAIL, config.ADMIN_PASSWORD);
  } catch (err) {
    console.error("error", err);
  }
  return client;
}
