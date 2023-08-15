onmessage = (e) => {
  console.log('Message received from main script', e.data)
  var result = e.data[0] + e.data[1]
  console.log('result is:', result)
  // document.getElementById('id3').innerHTML = result
  postMessage(result)
}