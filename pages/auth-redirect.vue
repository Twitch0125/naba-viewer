<script setup>
const { client } = usePB();
const {
  public: { REDIRECT_URI },
} = useRuntimeConfig();
onMounted(async () => {
  const params = new URL(window.location).searchParams;
  const provider = JSON.parse(localStorage.getItem("provider"));

  if (provider.state !== params.get("state")) {
    throw "State parameters don't match";
  }

  //authenticate
  const { token, user } = await client.users.authViaOAuth2(
    provider.name,
    params.get("code"),
    provider.codeVerifier,
    REDIRECT_URI
  );
  await $fetch("/set-cookie", {
    method: "PUT",
    body: {
      cookies: [
        { key: "pb_auth", value: JSON.stringify({ token, model: user }) },
      ],
    },
  });
  const router = useRouter();
  router.replace("/");
});
</script>
<template>
  <div>Authenticating...</div>
</template>
