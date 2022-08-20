import { defineNuxtConfig } from "nuxt";

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
    test: {
      include: ["test/**/*.test.ts"],
      environment: "happy-dom",
      deps: {
        inline: ["@vue", "@vueuse", "@headlessui", "@nuxt/test-utils-edge"],
      },
    },
  },
  experimental: {
    reactivityTransform: true,
  },
});
