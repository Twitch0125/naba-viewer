export default defineEventHandler(async (event) => {
  const query = await useQuery(event);
  const keys = query.keys.split(",");
  const cookies = useCookies(event);
  const cookieMap = {};
  keys.forEach((key) => (cookieMap[key] = cookies[key]));
  return cookieMap;
});
