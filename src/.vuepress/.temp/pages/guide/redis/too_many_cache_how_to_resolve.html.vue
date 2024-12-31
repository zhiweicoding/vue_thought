<template><div><h1 id="redis-cluster-常见问题解析" tabindex="-1"><a class="header-anchor" href="#redis-cluster-常见问题解析"><span>Redis Cluster 常见问题解析</span></a></h1>
<p>在高并发场景下，Redis 经常被用作分布式缓存系统。为了提高缓存的可用性和扩展性，Redis 提供了 Redis Cluster 作为分布式缓存的解决方案。本文将针对 Redis Cluster 常见的几个问题进行详细解析，帮助大家深入理解 Redis Cluster 的工作原理和优势。</p>
<h2 id="_1-为什么需要-redis-cluster" tabindex="-1"><a class="header-anchor" href="#_1-为什么需要-redis-cluster"><span>1. 为什么需要 Redis Cluster？</span></a></h2>
<p>在高并发场景下，使用 Redis 主要会遇到以下两个问题：</p>
<ol>
<li><strong>缓存的数据量太大</strong>：数据量可能达到数十 GB，甚至是几百 GB 或更大。</li>
<li><strong>并发量要求过高</strong>：尽管 Redis 号称单机可以支持 10 万并发，但实际项目中可能会遇到很多不可靠因素，特别是复杂的读写操作会显著影响并发性能。</li>
</ol>
<h3 id="传统方案的局限性" tabindex="-1"><a class="header-anchor" href="#传统方案的局限性"><span>传统方案的局限性</span></a></h3>
<ul>
<li><strong>主从复制</strong> 和 <strong>Redis Sentinel</strong>：这两种方案通过增加主库（master）的副本（slave）来提高 Redis 服务的可用性和读吞吐量，但无法解决缓存数据量过大或写压力过大的问题。</li>
<li><strong>硬件扩容</strong>：通过提升硬件配置来解决性能瓶颈，然而，硬件的局限性和成本都限制了这种方式的扩展性。</li>
</ul>
<figure><img src="https://dzw-1256485110.cos.ap-beijing.myqcloud.com/picgo/202412261613178.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="redis-cluster-解决的问题" tabindex="-1"><a class="header-anchor" href="#redis-cluster-解决的问题"><span>Redis Cluster 解决的问题</span></a></h3>
<p>Redis Cluster 是通过分片（Sharding）来分配数据，提供水平扩展和高可用性。相比传统的主从复制方案，Redis Cluster 允许动态扩容和缩容，从而有效应对高并发和大数据量缓存需求。</p>
<h4 id="主要优势" tabindex="-1"><a class="header-anchor" href="#主要优势"><span>主要优势</span></a></h4>
<ul>
<li><strong>横向扩展</strong>：可以通过增加 Redis 节点来扩展集群，缓解写压力和存储压力。</li>
<li><strong>内置主从复制、故障转移机制</strong>：Redis Cluster 自动进行主从复制，不需要额外部署 Redis Sentinel。</li>
<li><strong>高可用性</strong>：支持动态扩容和缩容，能够提供集群级别的高可用服务。</li>
</ul>
<h2 id="_2-redis-cluster-的基本架构" tabindex="-1"><a class="header-anchor" href="#_2-redis-cluster-的基本架构"><span>2. Redis Cluster 的基本架构</span></a></h2>
<p>Redis Cluster 需要至少 3 个主节点（master）和 3 个从节点（slave）以保证高可用性。每个主节点都有一个或多个从节点作为副本，用于故障转移和提高读吞吐量。</p>
<ul>
<li><strong>数据分片</strong>：数据会被均匀分布到多个主节点上，保证负载均衡。</li>
<li><strong>主从复制</strong>：每个主节点有至少一个从节点，主节点宕机时，从节点自动接管。</li>
<li><strong>故障转移</strong>：Redis Cluster 支持自动故障转移机制，保证集群的高可用性。</li>
</ul>
<figure><img src="https://dzw-1256485110.cos.ap-beijing.myqcloud.com/picgo/202412261615079.png" alt="image-20241226161537003" tabindex="0" loading="lazy"><figcaption>image-20241226161537003</figcaption></figure>
<h2 id="_3-redis-cluster-是如何分片的" tabindex="-1"><a class="header-anchor" href="#_3-redis-cluster-是如何分片的"><span>3. Redis Cluster 是如何分片的？</span></a></h2>
<p>Redis Cluster 使用 <strong>哈希槽分区</strong> 来进行数据管理。整个 Redis Cluster 会被划分为 16384 个哈希槽，每个键值对会根据其 key 的哈希值被分配到一个哈希槽中。</p>
<h3 id="哈希槽的计算方法" tabindex="-1"><a class="header-anchor" href="#哈希槽的计算方法"><span>哈希槽的计算方法</span></a></h3>
<ol>
<li>对给定的 key 计算 CRC-16 校验码。</li>
<li>对校验码进行取模操作，计算出该 key 对应的哈希槽。</li>
</ol>
<h3 id="哈希槽分配" tabindex="-1"><a class="header-anchor" href="#哈希槽分配"><span>哈希槽分配</span></a></h3>
<p>每个 Redis 节点负责一个或多个哈希槽。例如，一个集群中可能会有 3 个节点，每个节点负责一定范围的哈希槽：</p>
<ul>
<li><strong>Node 1</strong>: 0 - 5500</li>
<li><strong>Node 2</strong>: 5501 - 11000</li>
<li><strong>Node 3</strong>: 11001 - 16383</li>
</ul>
<p>客户端通过连接任意一个 Redis 节点，查找 key 对应的哈希槽，并通过哈希槽找到目标节点。</p>
<h2 id="_4-为什么-redis-cluster-的哈希槽是-16384-个" tabindex="-1"><a class="header-anchor" href="#_4-为什么-redis-cluster-的哈希槽是-16384-个"><span>4. 为什么 Redis Cluster 的哈希槽是 16384 个？</span></a></h2>
<p>虽然 CRC-16 校验码可以产生 65536（2^16）个值，但 Redis Cluster 选择了 16384 个哈希槽（2^14）。这是由于以下原因：</p>
<ul>
<li><strong>节省内存</strong>：每个哈希槽的位图（bitmap）大小直接影响节点配置的内存占用，16384 个哈希槽在内存上更具可扩展性。</li>
<li><strong>性能优化</strong>：相比 65536 个哈希槽，16384 个哈希槽的位图压缩效果更好，同时也能满足大多数实际需求。</li>
</ul>
<h2 id="_5-redis-cluster-如何重新分配哈希槽" tabindex="-1"><a class="header-anchor" href="#_5-redis-cluster-如何重新分配哈希槽"><span>5. Redis Cluster 如何重新分配哈希槽？</span></a></h2>
<p>在 Redis Cluster 中，哈希槽的分配是动态的，支持在集群扩容或缩容时重新分配哈希槽。以下是常用的命令：</p>
<ul>
<li><strong>CLUSTER ADDSLOTS</strong>：将指定的哈希槽分配给当前节点。</li>
<li><strong>CLUSTER DELSLOTS</strong>：从当前节点中删除指定的哈希槽。</li>
<li><strong>CLUSTER SETSLOT</strong>：迁移哈希槽到其他节点。</li>
</ul>
<h2 id="_6-redis-cluster-扩容和缩容期间如何保证服务可用" tabindex="-1"><a class="header-anchor" href="#_6-redis-cluster-扩容和缩容期间如何保证服务可用"><span>6. Redis Cluster 扩容和缩容期间如何保证服务可用？</span></a></h2>
<p>Redis Cluster 在扩容和缩容期间，能够保证集群对外提供服务，具体方式如下：</p>
<ul>
<li><strong>ASK 重定向</strong>：当哈希槽正在迁移时，客户端会收到一个临时的 <code v-pre>ASK</code> 重定向，客户端会自动重定向请求到新的节点。</li>
<li><strong>MOVED 重定向</strong>：当哈希槽迁移完成后，客户端会收到 <code v-pre>MOVED</code> 错误，客户端会将请求发送到新节点。</li>
</ul>
<p>这些机制使得扩容和缩容过程对客户端透明，保证了 Redis Cluster 的高可用性。</p>
<h2 id="_7-redis-cluster-中的节点如何进行通信" tabindex="-1"><a class="header-anchor" href="#_7-redis-cluster-中的节点如何进行通信"><span>7. Redis Cluster 中的节点如何进行通信？</span></a></h2>
<p>Redis Cluster 中的节点使用 <strong>Gossip 协议</strong> 来进行通信和状态同步。常见的 Gossip 消息包括：</p>
<ul>
<li><strong>MEET</strong>：用于将新节点加入集群。</li>
<li><strong>PING/PONG</strong>：节点之间定时交换状态信息，检查其他节点的可用性。</li>
<li><strong>FAIL</strong>：用于标记节点故障，触发故障转移机制。</li>
</ul>
<p>节点通过 Gossip 协议相互发送状态信息，保证集群的稳定运行。</p>
<h2 id="_8-总结" tabindex="-1"><a class="header-anchor" href="#_8-总结"><span>8. 总结</span></a></h2>
<p>Redis Cluster 提供了高可用、可扩展的分布式缓存解决方案，能够有效应对高并发和大数据量缓存的挑战。其主要特点包括：</p>
<ul>
<li><strong>横向扩展</strong>：支持动态增加或减少节点来应对不断增长的压力。</li>
<li><strong>高可用性</strong>：内置主从复制和故障转移机制，保证集群的持续运行。</li>
<li><strong>哈希槽分片</strong>：通过哈希槽来进行数据分配，提升了集群的横向扩展性和容错性。</li>
</ul>
<p>Redis Cluster 的这些优势使其成为大规模应用中缓存系统的首选方案。</p>
<h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2>
<ul>
<li><a href="https://redis.io/docs/reference/cluster-spec/" target="_blank" rel="noopener noreferrer">Redis Cluster 官方规范</a></li>
<li><a href="https://redis.io/topics/cluster-tutorial" target="_blank" rel="noopener noreferrer">Redis Cluster 官方教程</a></li>
<li><a href="https://juejin.cn/post/7016865316240097287" target="_blank" rel="noopener noreferrer">Redis 集群详述</a></li>
<li><a href="https://juejin.cn/post/6949832776224866340" target="_blank" rel="noopener noreferrer">Redis 专题：了解 Redis 集群，这篇就够了</a></li>
</ul>
</div></template>


