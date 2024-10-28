// https://nuxt.com/docs/api/configuration/nuxt-config
import { currentLocales } from "./src/config/i18n.js";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: {
    baseUrl: "",
    public: {
      apiBase: "/api",
      baseUrl: process.env.BASE_URL || "http://localhost:3001",
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "radix-vue/nuxt",
    "@nuxt/icon",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/google-fonts",
  ],
  i18n: {
    locales: currentLocales,
    langDir: "locales",
    defaultLocale: "en",
    strategy: "no_prefix",
    vueI18n: "./src/config/i18n.config.js",
    //启用浏览器语言检测，以便在访问者第一次访问网站时自动将其重定向到首选语言环境
    detectBrowserLanguage: {
      //启动cookie
      useCookie: true,
      //用于存储当前语言环境的变量名
      cookieKey: "i18n_redirected",
      //(建议用于改进SEO) - 仅检测站点根路径（/）上的浏览器区域设置。只有当使用策略而不是“no_prefix”时才有效
      redirectOn: "root",
    },
  },
  icon: {
    serverBundle: {
      collections: ["uil", "mdi"], // <!--- this
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/style/main.scss" as *;',
        },
      },
    },
  },

  googleFonts: {
    families: {
      serif: true,
      "Open+Sans": true,
    },
    display: "swap",
  },
  srcDir: "src/",
});
