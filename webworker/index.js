function createWorker(f) {
  let blob = new Blob([`(${f.toString()})()`])
  let url = window.URL.createObjectURL(blob)
  let worker = new Worker(url)

  return worker
}

let worker = createWorker(function(){
  let count = 0
  let timer = setInterval(() => {
    self.postMessage({ count: count++})
  }, 500)

  self.onmessage = function(e) {
    const { cmd } = e.data
    
    switch(cmd) {
      case 'close':
        console.log('close')
        clearInterval(timer)
        self.close()
    }
  }
})

worker.onmessage = function(e) {
  const { count } = e.data

  if (count > 10) {
    console.log('count is bigger than 10')
    worker.postMessage({ cmd: 'close' })
    return
  }

  console.log('count', count)
}
