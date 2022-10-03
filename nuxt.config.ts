// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
    public: {
      POCKETBASE_URL: process.env.POCKETBASE_URL,
      REDIRECT_URI: process.env.REDIRECT_URI,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@kevinmarrec/nuxt-pwa",
    "trpc-nuxt",
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
  trpc: {
    baseURL: "", // Set empty string (default) to make requests by relative address
    endpoint: "/trpc", // defaults to /trpc
  },
  typescript: {
    strict: true, // required to make input/output types work
  },
  experimental: {
    reactivityTransform: true,
  },
  nitro: {
    preset: "node-server",
  },
  modern: true,
});
