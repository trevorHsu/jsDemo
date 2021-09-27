class Onion {
  constructor() {
    this.handlers = []
  }

  use(handler) {
    if (typeof handler !== 'function') throw new TypeError('use() called without function type parameter') 

    this.handlers.push(handler)
    return this
  }

  composeHandlers() {
    const fn = compose(this.handlers);
  
    const composedHandler = function(executor) {
      const ctx = createContext()
      const wrappedExecutor = () => Promise.resolve(executor()).then(res => resultHandler(ctx, res))

      return fn(ctx, wrappedExecutor).then(() => ctx)
    }

    return composedHandler;
  }

  execute(executor) { // executor 可以为任意类型，若不为function类型，则结果为参数值
    if (!arguments.length) return Promise.reject(new ReferenceError('execute() called without any parameter'))

    if (typeof executor !== 'function') {
      executor = () => executor
    }

    let composedHandler = this.composeHandlers()

    return composedHandler(executor)
  }
}


function createContext() {
  return {
    data: {},
    result: null
  }
}

function compose(handlers) { // 嵌套执行每个handler
  return function(context, next) {
    let index = -1
    return dispatch(0)

    function dispatch(i) {
      if (index >= i) return Promise.reject(new Error('next() called multiple times'))
      let fn = i === handlers.length ? next : handlers[i]
  
      if (!fn) return Promise.resolve() // 边界
  
      index = i
  
      try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)))
      } catch (err) {
        return Promise.reject(err)
      }
    }
  }
}

function resultHandler(ctx, result) {
  Object.defineProperty(ctx, 'result', {
    value: result,
    writable: false,
    configurable: false
  })
}





let o = new Onion()

o.use(async (ctx, next) => {
  console.log(1, ctx)
  await next()
  ctx.data.use1 = 1
  console.log(1)
})

o.use(async (ctx, next) => {
  console.log(2)
  await next()
  ctx.data.use2 = 2
  console.log(2)
})

o.use(async (ctx, next) => {
  console.log(3)
  await next()
  ctx.data.use3 = 3
  console.log(3)
})

// o.execute(() => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log(444)
//       resolve(555)
//     }, 2000)
//   })
// })
// .then(ctx => {
//   console.log('final', ctx)
// })
// .catch(err => {
//   console.log('something wrong', err)
// })
