require("dotenv").config()

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "server",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "myShop",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@assets/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/swiper.js", mode: "client" },
    { src: "~/plugins/vuexPersist", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  eslint: {
    cache: false,
  },

  buildDir: "dist",

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",

    // '@nuxtjs/tailwindcss',

    "@nuxt/postcss8",

    "@nuxtjs/vuetify",

    "@nuxtjs/snipcart",
  ],

  snipcart: {
    key: process.env.SNIPCART,
  },

  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    treeShake: true,
    // defaultAssets: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",

    "@nuxtjs/apollo",

    "@nuxtjs/dotenv",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.NUXT_PUBLIC_API_URL + "graphql",
      },
    },
    // defaultOptions: {
    //   // See 'apollo' definition
    //   // For example: default query options
    //   $query: {
    //     loadingKey: "loading",
    //     fetchPolicy: "cache-and-network",
    //   },
    // },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    loaders: {
      vue: {
        prettify: false,
      },
    },
  },
}
