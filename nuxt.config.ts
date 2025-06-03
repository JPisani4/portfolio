export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  css: ["~/assets/css/main.css"],
  ui: {
    colorMode: false,
  },
  app: {
    head: {
      title: "Jordan Pisani | Web Developer",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "" }],
    },
  },
});
