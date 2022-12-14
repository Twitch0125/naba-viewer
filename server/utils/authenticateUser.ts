import { CompatibilityEvent } from "h3";
import Pocketbase from "pocketbase";
export default async function authenticateUser(event: CompatibilityEvent) {
  const config = useRuntimeConfig();
  const client = new Pocketbase(config.public.POCKETBASE_URL);
  const body = await useBody(event);
  if (body.admin) {
    await client.admins.authViaEmail(body.email, body.password);
  } else {
    await client.users.authViaEmail(body.email, body.password);
  }
  return client;
}
