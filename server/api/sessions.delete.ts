export default defineEventHandler(async (event) => {
  setCookie(event, "pb_auth", "");
  setCookie(event, "token-cookie", "");
  setCookie(event, "model-cookie", "");
  return event.res.end();
});
