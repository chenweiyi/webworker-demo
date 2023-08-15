/**
 * 预期结果
 * Loop run
 * Promise run
 * hello from worker
 * setTimeout run
 */

/**
 * 打印结果
 * Loop run
 * hello from worker
 * Promise run
 * setTimeout run
 */

/**
 * 或者
 * hello from worker
 * Loop run
 * Promise run
 * setTimeout run
 */

self.addEventListener('message', e => {
  postMessage('hello from worker')

  setTimeout(() => {
    console.log('setTimeout run')
    postMessage('hello from worker setTimeout')
  })

  Promise.resolve().then(() => {
    console.log('Promise run')
    postMessage('hello from worker Promise')
  })

  for(let i=0; i<1001; i++) {
    if (i === 1000) {
      console.log('Loop run')
      postMessage('hello from Loop')
    }
  }
})
