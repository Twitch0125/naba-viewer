export default function useTokenCookie() {
  return useCookie("token-cookie", {
    secure: true,
    sameSite: "strict",
  });
}
