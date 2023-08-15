```js
import add from './util.js'

self.addEventListener('message', e => {
  postMessage(add(e.data[0], e.data[1]))
})

// 可以不要下面这段
export default self
```

或者下面这么写也可以：

```js
import add from './util.js'

onmessage = e => {
  postMessage(add(e.data[0], e.data[1]))
}

```