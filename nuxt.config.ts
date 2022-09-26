// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
    public: {
      APPWRITE_PROJECT: process.env.APPWRITE_PROJECT,
      APPWRITE_URL: process.env.APPWRITE_URL,
      POCKETBASE_URL: process.env.POCKETBASE_URL,
      REDIRECT_URI: process.env.REDIRECT_URI,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@kevinmarrec/nuxt-pwa",
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // automatically imports `usePinia()`
          "defineStore",
          // automatically imports `usePinia()` as `usePiniaStore()`
          ["defineStore", "definePiniaStore"],
        ],
      },
    ],
  ],
  experimental: {
    reactivityTransform: true,
  },
  nitro: {
    preset: "node-server",
  },
  modern: true,
});
