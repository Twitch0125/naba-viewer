import { defineNuxtConfig } from "nuxt";
import { VitePWA } from "vite-plugin-pwa";
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
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
  vite: {
    plugins: [
      VitePWA({
        registerType: "autoUpdate",
        injectRegister: "auto",
        workbox: {},
      }),
    ],
  },
  experimental: {
    reactivityTransform: true,
  },
});
