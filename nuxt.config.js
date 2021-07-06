export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtPC',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['ant-design-vue/dist/antd.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/vue-inject.ts',
    '@/plugins/composition-api.ts',
    '@/plugins/axios'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],

  styleResources: { stylus: '~/assets/css/common.styl' },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true // Can be also an object with default options
    // baseURL: 'https://yxapp.uat.yixincapital.com'
    // retry: { retries: 3 }
  },
  proxy: {
    '/phenix-platform': 'https://yxapp.uat.yixincapital.com',
    '/api2/': 'http://api.another-website.com'
  },

  router: {
    middleware: 'stats' // middleware will be called for every route change.
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
