import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/demo/",
  {
    text: "指南",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Redis",
        icon: "lightbulb",
        prefix: "redis/",
        children: ["too_many_cache_how_to_resolve", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
]);
