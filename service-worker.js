if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,c,s)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const a={uri:location.origin+i.slice(1)};return Promise.all(c.map((i=>{switch(i){case"exports":return r;case"module":return a;default:return e(i)}}))).then((e=>{const i=s(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-21410b98"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/07/23/两数相加/index.html",revision:"5aa9075b7d89747818e6be82f5943d17"},{url:"2021/07/25/1743. 从相邻元素对还原数组/index.html",revision:"f8985bf1517f12a25639fd92c5687009"},{url:"2021/07/28/863. 二叉树中所有距离为 K 的结点/index.html",revision:"ecf80baedf71eeb244be3dfde7e952db"},{url:"2021/07/29/1104. 二叉树寻路/index.html",revision:"92b1885ee8153d23569c006980fef360"},{url:"2021/07/29/C++取整函数ceil（向上取整）和floor（向下取整）/index.html",revision:"b13f0a58123cd62b583675ebbddb748f"},{url:"2021/07/30/数学问题的解题窍门/index.html",revision:"77399c3640b8bc1069557fc43053c5f1"},{url:"2021/07/31/987. 二叉树的垂序遍历/index.html",revision:"f187452d00aee5765de044bfc51fc4e5"},{url:"2021/07/31/C++ STL vector的push_back()和emplace_back()/index.html",revision:"1545eb504d57f90c7c4bd22d82a0beb4"},{url:"archives/2021/07/index.html",revision:"e289466bfa7e77fd5b6d0eb3491485fc"},{url:"archives/2021/index.html",revision:"20ed22095bdb6ef266559343228df298"},{url:"archives/index.html",revision:"6cd33feab78001f0c960a7aff48f5214"},{url:"categories/index.html",revision:"fb6403d97602b1b1033a1f4129f17f3a"},{url:"css/index.css",revision:"531720116288e5171e706625e42c2e2c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/bg.jpg",revision:"444b5cf520177ca07c68f274804e318d"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/fm.jpg",revision:"b8137c8f9d098f4aed0d07b60b8cb704"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/IU.jpg",revision:"8a6ea14b5e6b23f5159c6e14158d6480"},{url:"img/IU1.jpg",revision:"ba996833c3ba0f54b00eacbbb4754e24"},{url:"index.html",revision:"e5c19af36a9fa29726c4626c6f8644f3"},{url:"js/main.js",revision:"01f62452fd05335569c6341d3ac0f52b"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"tags/BFS/index.html",revision:"61a30aa2e57dc6e406c66a17fb64f322"},{url:"tags/C-函数/index.html",revision:"ecca1b60fd9d0f022b1e667f7286f34e"},{url:"tags/DFS/index.html",revision:"052cb0dc736f0a8aa371272ab7cce937"},{url:"tags/index.html",revision:"8d78b58b23cca3c451211556baa0fda7"},{url:"tags/三元组/index.html",revision:"6f067adf5075b154b87cce13fa2cda94"},{url:"tags/二叉树/index.html",revision:"f438f98715e3e84470b539845a7409e6"},{url:"tags/哈希表/index.html",revision:"0f51206de76d35ae4647c60ca5798e32"},{url:"tags/数学/index.html",revision:"3fca5daaa3c7cbec081063da3714617d"},{url:"tags/算法/index.html",revision:"5c6c91499149bb24892350f5fe401224"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
