interface Curried1<A, R> {
  (): Curried1<A, R>
  (a: A | undefined): R
}

interface Curried2<A, B, R> {
  (): Curried2<A, B, R>
  (b: B | undefined): Curried1<B, R>
  (a: A | undefined, b: B | undefined): R
}

interface Curried3<A, B, C, R> {
  (): Curried3<A, B, C, R>
  (c: C | undefined): Curried1<C, R>
  (b: B | undefined, c: C | undefined): Curried2<B, C, R>
  (a: A | undefined, b: B | undefined, c: C | undefined): R
}

// 1 个参数的函数柯里化
export function curry1<A, R>(fn: (a: A) => R): Curried1<A, R> {
  function curried(): Curried1<A, R>
  function curried(a: A | undefined): R
  function curried(a?: A | undefined) {
    if (arguments.length) {
      return fn(a)
    }
    return curried
  }
  return curried
}

// 2 个参数的函数柯里化
export function curry2<A, B, R>(fn: (a: A, b: B) => R): Curried2<A, B, R> {
  function curried(): Curried2<A, B, R>
  function curried(b: B): Curried1<B, R>
  function curried(a: A, b: B): R
  function curried(a?: A | B, b?: B) {
    switch (arguments.length) {
      case 1: return curry1<B, R>((b) => fn(a as A, b))
      case 2: return fn(a as A, b)
      case 0: return curried
      default: return fn(a as A, b)
    }
  }
  return curried
}

// 3 个参数的函数柯里化
export function curry3<A, B, C, R>(fn: (a: A, b: B, c: C) => R): Curried3<A, B, C, R>  {
  function curried(): Curried3<A, B, C, R>
  function curried(c: C): Curried1<C, R>
  function curried(b: B, c: C): Curried2<B, C, R>
  function curried(a: A, b: B, c: C): R
  function curried(a?: A|B|C, b?: B|C, c?: C) {
    switch(arguments.length) {
      case 1: return curry2<B, C, R>((b, c) => fn(a as A, b, c))
      case 2: return curry1<C, R>((c) => fn(a as A, b as B, c))
      case 3: return fn(a as A, b as B, c as C)
      case 0: return curried
      default: return fn(a as A, b as B, c as C)
    }
  }
  return curried
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
