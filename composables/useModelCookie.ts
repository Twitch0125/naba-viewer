export default function useModelCookie() {
  return useCookie("model-cookie", {
    secure: true,
    sameSite: "strict",
  });
}
