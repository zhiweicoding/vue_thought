import comp from "/Users/zhiwei/Documents/online/thought/src/.vuepress/.temp/pages/guide/redis/too_many_cache_how_to_resolve.html.vue"
const data = JSON.parse("{\"path\":\"/guide/redis/too_many_cache_how_to_resolve.html\",\"title\":\"Redis缓存内容太多了怎么办\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Redis缓存内容太多了怎么办\",\"icon\":\"circle-info\",\"gitInclude\":[],\"description\":\"Redis Cluster 常见问题解析 在高并发场景下，Redis 经常被用作分布式缓存系统。为了提高缓存的可用性和扩展性，Redis 提供了 Redis Cluster 作为分布式缓存的解决方案。本文将针对 Redis Cluster 常见的几个问题进行详细解析，帮助大家深入理解 Redis Cluster 的工作原理和优势。 1. 为什么需要 R...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://appoint.zhiwei.plus/guide/redis/too_many_cache_how_to_resolve.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"AI面试大师\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Redis缓存内容太多了怎么办\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Redis Cluster 常见问题解析 在高并发场景下，Redis 经常被用作分布式缓存系统。为了提高缓存的可用性和扩展性，Redis 提供了 Redis Cluster 作为分布式缓存的解决方案。本文将针对 Redis Cluster 常见的几个问题进行详细解析，帮助大家深入理解 Redis Cluster 的工作原理和优势。 1. 为什么需要 R...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://dzw-1256485110.cos.ap-beijing.myqcloud.com/picgo/202412261613178.png\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Redis缓存内容太多了怎么办\\\",\\\"image\\\":[\\\"https://dzw-1256485110.cos.ap-beijing.myqcloud.com/picgo/202412261613178.png\\\",\\\"https://dzw-1256485110.cos.ap-beijing.myqcloud.com/picgo/202412261615079.png\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"刁志伟\\\",\\\"url\\\":\\\"https://https://zhiwei.plus/\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"1. 为什么需要 Redis Cluster？\",\"slug\":\"_1-为什么需要-redis-cluster\",\"link\":\"#_1-为什么需要-redis-cluster\",\"children\":[{\"level\":3,\"title\":\"传统方案的局限性\",\"slug\":\"传统方案的局限性\",\"link\":\"#传统方案的局限性\",\"children\":[]},{\"level\":3,\"title\":\"Redis Cluster 解决的问题\",\"slug\":\"redis-cluster-解决的问题\",\"link\":\"#redis-cluster-解决的问题\",\"children\":[]}]},{\"level\":2,\"title\":\"2. Redis Cluster 的基本架构\",\"slug\":\"_2-redis-cluster-的基本架构\",\"link\":\"#_2-redis-cluster-的基本架构\",\"children\":[]},{\"level\":2,\"title\":\"3. Redis Cluster 是如何分片的？\",\"slug\":\"_3-redis-cluster-是如何分片的\",\"link\":\"#_3-redis-cluster-是如何分片的\",\"children\":[{\"level\":3,\"title\":\"哈希槽的计算方法\",\"slug\":\"哈希槽的计算方法\",\"link\":\"#哈希槽的计算方法\",\"children\":[]},{\"level\":3,\"title\":\"哈希槽分配\",\"slug\":\"哈希槽分配\",\"link\":\"#哈希槽分配\",\"children\":[]}]},{\"level\":2,\"title\":\"4. 为什么 Redis Cluster 的哈希槽是 16384 个？\",\"slug\":\"_4-为什么-redis-cluster-的哈希槽是-16384-个\",\"link\":\"#_4-为什么-redis-cluster-的哈希槽是-16384-个\",\"children\":[]},{\"level\":2,\"title\":\"5. Redis Cluster 如何重新分配哈希槽？\",\"slug\":\"_5-redis-cluster-如何重新分配哈希槽\",\"link\":\"#_5-redis-cluster-如何重新分配哈希槽\",\"children\":[]},{\"level\":2,\"title\":\"6. Redis Cluster 扩容和缩容期间如何保证服务可用？\",\"slug\":\"_6-redis-cluster-扩容和缩容期间如何保证服务可用\",\"link\":\"#_6-redis-cluster-扩容和缩容期间如何保证服务可用\",\"children\":[]},{\"level\":2,\"title\":\"7. Redis Cluster 中的节点如何进行通信？\",\"slug\":\"_7-redis-cluster-中的节点如何进行通信\",\"link\":\"#_7-redis-cluster-中的节点如何进行通信\",\"children\":[]},{\"level\":2,\"title\":\"8. 总结\",\"slug\":\"_8-总结\",\"link\":\"#_8-总结\",\"children\":[]},{\"level\":2,\"title\":\"参考资料\",\"slug\":\"参考资料\",\"link\":\"#参考资料\",\"children\":[]}],\"readingTime\":{\"minutes\":5.2,\"words\":1559},\"filePathRelative\":\"guide/redis/too_many_cache_how_to_resolve.md\",\"autoDesc\":true}")
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