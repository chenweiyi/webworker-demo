web worker
===

## 创建worker

创建worker是使用构建函数创建的一个对象：

```js
const worker = new Worker(path, options);
```

参数说明：

| 参数   | 说明 |
|------- | ------------------------------------------------------------------------------------- |
| path      | 有效的js脚本的地址，必须遵守同源策略。无效的js地址或者违反同源策略，会抛出SECURITY_ERR 类型错误 | 
| options.type | 可选，用以指定 worker 类型。该值可以是 classic 或 module。 如未指定，将使用默认值 classic |
| options.credentials | 可选，用以指定 worker 凭证。该值可以是 omit, same-origin，或 include。如果未指定，或者 type 是 classic，将使用默认值 omit (不要求凭证) |
| options.name | 可选，在 DedicatedWorkerGlobalScope 的情况下，用来表示 worker 的 scope 的一个 DOMString 值，主要用于调试目的  |


## worker简介

worker运行在另一个全局上下文中，不同于window。worker中没有window对象，document对象等，因此在worker中通过window获取全局作用域将返回错误。

在worker内，不能操作DOM, 不能使用window对象，但你可以使用websockets, indexedDB等其他在window下的对象和属性，[查看worker可以使用的函数和类](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)。


worker可以分为：
+ 专用worker（[DedicateWorkerGlobalScope](https://developer.mozilla.org/zh-CN/docs/Web/API/DedicatedWorkerGlobalScope)）
+ 共享worker([SharedWorkerGlobalScope](https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope))
+ service worker([ServiceWorkerGlobalScope](https://developer.mozilla.org/zh-CN/docs/Web/API/ServiceWorkerGlobalScope))

> 专用worker仅能被首次生成它的脚本使用
> 共享worker可以同时被多个脚本使用
> service worker 一般作为web程序，浏览器和网络之间的代理服务，旨在创建有效的离线体验，拦截网络请求等。






## 参考链接

[web worker api](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)
[一文彻底学会使用web worker](https://juejin.cn/post/7139718200177983524?searchId=20230814182931539E17D2D1EE191CD73D)

