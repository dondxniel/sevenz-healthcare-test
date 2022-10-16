export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "sevenz-healthcare-test",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~layouts/global.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/lottie-vue-player.client.ts"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/vuetify",
    "@nuxtjs/fontawesome",
  ],

  fontawesome: {
    icons: {
      solid: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/apollo", "@nuxtjs/auth-next"],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "https://testdrive.kompletecare.com/graphql",
      },
    },
  },

  auth: {
    redirect: {
      login: "/home",
      logout: "/",
      callback: false,
      home: "/",
    },
  },

  router: {
    middleware: ["auth"],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
