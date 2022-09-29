export default async function useIsAdmin() {
  const { client } = useAppwrite();
  const isAdmin = ref(false);
  try {
    await client.admins.refresh();
    isAdmin.value = true;
  } catch {
    isAdmin.value = false;
  }
  return isAdmin;
}
