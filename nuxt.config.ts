// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/css_reset.css'],

  typescript: {
    strict: false
  },
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },
  ssr: false,
  modules: ["nuxt-quasar-ui", '@pinia/nuxt' ],
  imports: {
    dirs: ['plugins/pinia/**','types', ]
  },
  compatibilityDate: '2024-07-22'
})