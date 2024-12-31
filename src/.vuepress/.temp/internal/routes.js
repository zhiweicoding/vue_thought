export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"/Users/zhiwei/Documents/online/thought/src/.vuepress/.temp/pages/demo/index.html.js"), meta: {"t":"主要功能与配置演示","i":"laptop-code"} }],
  ["/demo/disable.html", { loader: () => import(/* webpackChunkName: "demo_disable.html" */"/Users/zhiwei/Documents/online/thought/src/.vuepress/.temp/pages/demo/disable.html.js"), meta: {"t":"布局与功能禁用","i":"gears","O":4} }],
  ["/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "demo_encrypt.html" */"/Users/zhiwei/Documents/online/thought/src/.vuepress/.temp/pages/demo/encrypt.html.js"), meta: {"t":"密码加密的文章","i":"lock"} }],
  ["/demo/layout.html", { loader: () => import(/* webpackChunkName: "demo_layout.html" */"/Users/zhiwei/Documents/online/thought/src/.vuepress/.temp/pages/demo/layout.html.js"), meta: {"t":"布局","i":"object-group","O":2} }],
  ["/demo/markdown.html", { loader: () => import(/* webpackChunkName: "demo_markdown.html" */"/Users/zhiwei/Documents/online/thought/src/.vuepress/.temp/pages/demo/markdown.html.js"), meta: {"t":"Markdown 展示","i":"fab fa-markdown","O":2} }],
  ["/demo/page.html", { loader: () => import(/* webpackChunkName: "demo_page.html" */"/Users/zhiwei/Documents/online/thought/src/.vuepress/.temp/pages/demo/page.html.js"), meta: {"t":"页面配置","i":"file","O":3} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"/Users/zhiwei/Documents/online/thought/src/.vuepress/.temp/pages/guide/index.html.js"), meta: {"t":"指南","i":"lightbulb"} }],
  ["/guide/bar/", { loader: () => import(/* webpackChunkName: "guide_bar_index.html" */"/Users/zhiwei/Documents/online/thought/src/.vuepress/.temp/pages/guide/bar/index.html.js"), meta: {"t":"Bar 功能","i":"lightbulb"} }],
  ["/guide/bar/baz.html", { loader: () => import(/* webpackChunkName: "guide_bar_baz.html" */"/Users/zhiwei/Documents/online/thought/src/.vuepress/.temp/pages/guide/bar/baz.html.js"), meta: {"t":"Baz","i":"circle-info"} }],
  ["/guide/foo/", { loader: () => import(/* webpackChunkName: "guide_foo_index.html" */"/Users/zhiwei/Documents/online/thought/src/.vuepress/.temp/pages/guide/foo/index.html.js"), meta: {"t":"Foo 功能","i":"lightbulb"} }],
  ["/guide/foo/ray.html", { loader: () => import(/* webpackChunkName: "guide_foo_ray.html" */"/Users/zhiwei/Documents/online/thought/src/.vuepress/.temp/pages/guide/foo/ray.html.js"), meta: {"t":"Ray","i":"circle-info"} }],
  ["/guide/redis/too_many_cache_how_to_resolve.html", { loader: () => import(/* webpackChunkName: "guide_redis_too_many_cache_how_to_resolve.html" */"/Users/zhiwei/Documents/online/thought/src/.vuepress/.temp/pages/guide/redis/too_many_cache_how_to_resolve.html.js"), meta: {"t":"Redis缓存内容太多了怎么办","i":"circle-info"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/zhiwei/Documents/online/thought/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/zhiwei/Documents/online/thought/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":""} }],
  ["/guide/redis/", { loader: () => import(/* webpackChunkName: "guide_redis_index.html" */"/Users/zhiwei/Documents/online/thought/src/.vuepress/.temp/pages/guide/redis/index.html.js"), meta: {"t":"Redis"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
