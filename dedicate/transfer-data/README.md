传递的数据，是深克隆的数据，而不是引用数据

> postMessage() 传递的数据可以是由结构化克隆算法处理的任何值或 JavaScript 对象，包括循环引用
>
> 结构化克隆算法不能处理的数据：
> + Error 以及 Function 对象；
> + DOM 节点
> + 对象的某些特定参数不会被保留
>   + RegExp 对象的 lastIndex 字段不会被保留
>   + 属性描述符，setters 以及 getters（以及其他类似元数据的功能）同样不会被复制。例如，如果一个对象用属性描述符标记为 read-only，它将会被复制为 read-write
>   + 原形链上的属性也不会被追踪以及复制。

结构化克隆算法支持的数据类型：

| 类型  | 说明  |
| --------------- | ----------- |
| 所有的原始类型 | symbol 除外 |
| Boolean |  |
| String |  |
| Date |  |
| RegExp | lastIndex字段不会保留 |
| Blob | |
| File |  |
| FileList |  |
| ArrayBuffer |  |
| ArrayBufferView | 这基本上意味着所有的 类型化数组 ，如 Int32Array 等。 |
| ImageData |  |
| Array |  |
| Object | 仅包括普通对象（如对象字面量） |
| Map |  |
| Set |  |


