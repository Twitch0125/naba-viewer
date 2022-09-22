<script setup>
const { client } = usePB();
const { data: discordProvider } = useLazyAsyncData(async () => {
  const { authProviders } = await client.users.listAuthMethods();
  const discordProvider = authProviders.find(
    (provider) => provider.name === "discord"
  );
  if (!discordProvider) {
    return false;
  }
  return discordProvider;
});

const {
  public: { REDIRECT_URI },
} = useRuntimeConfig();
const authUrl = computed(() => discordProvider.value.authUrl + REDIRECT_URI);

const saveProvider = () => {
  localStorage.setItem("provider", JSON.stringify(discordProvider.value));
};
</script>
<template>
  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form class="space-y-6" method="POST" action="/api/sessions">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email address</label
          >
          <div class="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700"
            >Password</label
          >
          <div class="mt-1">
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label class="cursor-pointer">
            <input
              name="admin"
              type="checkbox"
              class="checkbox checkbox-primary checkbox-sm"
            />
            <span class="label-text ml-2"> Admin </span>
          </label>
        </div>

        <!-- <div class="flex items-center justify-between">
          <div class="text-sm">
            <a
              href="#"
              class="font-medium text-primary hover:text-primary-focus"
              >Forgot your password?</a
            >
          </div>
        </div> -->

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-focus focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Sign in
          </button>
        </div>
      </form>
      <!-- identiy providers -->
      <div v-if="discordProvider" class="mt-6">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300" />
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="bg-white px-2 text-gray-500">Or continue with</span>
          </div>
        </div>

        <div class="mt-6 gap-3">
          <div>
            <a
              @click="saveProvider"
              :href="authUrl"
              class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 gap-2"
            >
              <DiscordIcon class="w-5 h-5" />
              <span>Sign in with Discord</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
