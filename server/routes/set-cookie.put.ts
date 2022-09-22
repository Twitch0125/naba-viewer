export default defineEventHandler(async (event) => {
  const { cookies, redirectUri } = await useBody(event);
  cookies.forEach((cookie) => {
    setCookie(event, cookie.key, cookie.value);
  });
  if (redirectUri) {
    return sendRedirect(event, redirectUri);
  } else {
    return "ok";
  }
});
