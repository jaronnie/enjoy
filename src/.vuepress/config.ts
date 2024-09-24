// @ts-ignore
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "大胆享受生活😎",
      description: "",
    },
    "/en/": {
      lang: "en-US",
      title: "Enjoy life",
      description: "",
    },
  },

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
