import comp from "/Users/zhiwei/Documents/online/thought/src/.vuepress/.temp/pages/portfolio.html.vue"
const data = JSON.parse("{\"path\":\"/portfolio.html\",\"title\":\"档案主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":false,\"portfolio\":false,\"title\":\"档案主页\",\"icon\":\"home\",\"welcome\":\"👋 你好，我是\",\"name\":\"江户川柯南\",\"avatar\":\"https://theme-hope-assets.vuejs.press/hero/conan.png\",\"titles\":[\"天才少年侦探\",\"小兰的青梅竹马\",\"黑衣组织的最大对手\"],\"footer\":false,\"gitInclude\":[],\"description\":\"介绍 这是一个档案主页的案例。 要使用此布局，你应该在页面 Frontmatter 中设置 home: true 和 portfolio: true。 相关配置文档请见 档案主页。\"},\"headers\":[{\"level\":2,\"title\":\"介绍\",\"slug\":\"介绍\",\"link\":\"#介绍\",\"children\":[]}],\"readingTime\":{\"minutes\":0.36,\"words\":107},\"filePathRelative\":\"portfolio.md\",\"autoDesc\":true}")
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
