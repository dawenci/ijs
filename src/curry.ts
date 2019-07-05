// 1 个参数的函数柯里化
export function curry1(fn: (a: any) => any) {
  return function curried(a?) {
    if (arguments.length) return fn(a)
    return curried
  }
}

// 2 个参数的函数柯里化
export function curry2(fn: (a: any, b: any) => any) {
  return function curried(a?, b?) {
    switch (arguments.length) {
      case 1: return curry1(b => fn(a, b))
      case 2: return fn(a, b)
      case 0: return curried
      default: return fn(a, b)
    }
  }
}

// 3 个参数的函数柯里化
export function curry3(fn: (a: any, b: any, c: any) => any) {
  return function curried(a?, b?, c?) {
    switch(arguments.length) {
      case 1: return curry2((b, c) => fn(a, b, c))
      case 2: return curry1(c => fn(a, b, c))
      case 3: return fn(a, b, c)
      case 0: return curried
      default: return fn(a, b, c)
    }
  }
}

const slice = Array.prototype.slice
// N 个参数的函数柯里化
export function curryN(n: number, fn: Function) {
  return function() {
    const restN = n - arguments.length

    if (restN <= 0) return fn.apply(void 0, arguments)

    const args = slice.call(arguments)
    switch (restN) {
      case 1: {
        return curry1(function (a) {
          args.push(a)
          return fn.apply(void 0, args)
        })
      }

      case 2: {
        return curry2(function (a, b) {
          args.push(a, b)
          return fn.apply(void 0, args)
        })
      }

      case 3: {
        return curry3(function (a, b, c) {
          args.push(a, b, c)
          return fn.apply(void 0 , args)
        })
      }

      default: {
        return curryN(restN, function () {
          args.push.apply(args, arguments)
          return fn.apply(void 0, args)
        })
      }
    }
  }
}

/**
 * @API
 * 柯里化
 */
export function curry(fn, length) {
  length = length || fn.length
  switch(length) {
    case 2: return curry2(fn)
    case 1: return curry1(fn)
    case 3: return curry3(fn)
    case 0: return fn
    default: return curryN(length, fn)
  }
}

export default curry
