// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
    APP_SECRET: process.env.APP_SECRET,
    REDIS_URL: process.env.REDIS_URL,
    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_PORT: process.env.REDIS_PORT,
    public: {
      POCKETBASE_URL: process.env.POCKETBASE_URL,
      REDIRECT_URI: process.env.REDIRECT_URI,
    },
  },
  build: {
    transpile: ['@heroicons/vue'],
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@kevinmarrec/nuxt-pwa',
    'trpc-nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `usePinia()`
          'defineStore',
          // automatically imports `usePinia()` as `usePiniaStore()`
          ['defineStore', 'definePiniaStore'],
        ],
      },
    ],
  ],
  trpc: {
    baseURL: '', // Set empty string (default) to make requests by relative address
    endpoint: '/trpc', // defaults to /trpc
  },
  typescript: {
    strict: true, // required to make input/output types work
  },
  experimental: {
    reactivityTransform: true,
  },
  nitro: {
    preset: 'node-server',
    storage: {
      redis: {
        driver: 'redis',
        url: process.env.REDIS_URL,
      },
    },
  },
  modern: true,
})
