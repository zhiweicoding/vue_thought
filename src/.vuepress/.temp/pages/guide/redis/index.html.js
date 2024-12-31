import comp from "/Users/zhiwei/Documents/online/thought/src/.vuepress/.temp/pages/guide/redis/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/redis/\",\"title\":\"Redis\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Redis\",\"article\":false,\"feed\":false,\"sitemap\":false,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://appoint.zhiwei.plus/guide/redis/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"AI面试大师\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Redis\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Redis\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
