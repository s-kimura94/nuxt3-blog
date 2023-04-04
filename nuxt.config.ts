import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    async (_, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config: any) =>
        config.plugins.push(vuetify({}))
      );
    },
  ],
  experimental: {
    inlineSSRStyles: false,
  },

  css: ["vuetify/styles"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
  },
});
