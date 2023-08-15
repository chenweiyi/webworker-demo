import add from './util.js'

self.addEventListener('message', e => {
  postMessage(add(e.data[0], e.data[1]))
})

// onmessage = e => {
//   postMessage(add(e.data[0], e.data[1]))
// }

export default self