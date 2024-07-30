// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/css_reset.css'],
  typescript: {
    // strict: false
  },
  alias: {
    // for not correct pinia path bug 
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },
  ssr: false,
  modules: ["nuxt-quasar-ui", '@pinia/nuxt'],
  imports: {
    dirs: ['plugins/pinia/**', 'types',]
  },

  /* deploy github pages
     app: {
      baseURL: '/<github repository>/',
      buildAssetsDir: 'assets'
    } 
    npx nuxt build --preset github_pages
  */
})