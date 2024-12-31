import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "AI面试大师",
  description: "AI面试大师",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
