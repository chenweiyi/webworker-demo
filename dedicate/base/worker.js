onmessage = (e) => {
  console.log('Message received from main script', e.data)
  var result = e.data[0] + e.data[1]
  console.log('result is:', result)
  postMessage(result)
}