importScripts('./util.js')

onmessage = (e) => {
  postMessage(add(e.data[0], e.data[1]))
}