// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  // app: {
  //   head: {
  //     title: "Nuxt course",
  //     meta: [
  //       {
  //         name: "description",
  //         content: "This is content from meta",
  //       },
  //     ],
  //   },
  // },
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "/"),
    assets: "/<rootDir>/assets",
  },
  css: ["~/assets/main.scss"],
  modules: ["@nuxt/content", "@pinia/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // ssr: false,
});
