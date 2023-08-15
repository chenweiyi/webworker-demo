onmessage = e => {
  console.log('Message received from main:', e.data)
  postMessage(e.data)
}