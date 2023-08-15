/**
 * 预期结果
 * Loop run
 * Promise run
 * hello from worker
 * hello from worker Loop
 * hello from worker Promise
 */


/**
 * 实际结果
 * hello from worker
 * Loop run
 * hello from worker Loop
 * Promise run
 * hello from worker Promise
 */

onmessage = (e) => {
  postMessage('hello from worker')

  close()

  setTimeout(() => {
    console.log('setTimeout run')
    postMessage('hello from worker setTimeout')
  })

  Promise.resolve().then(() => {
    console.log('Promise run')
    postMessage('hello from worker Promise')
  })

  for(let i=0; i< 1001; i++) {
    if (i === 1000) {
      console.log('Loop run')
      postMessage('hello from worker Loop')
    }
  }
}