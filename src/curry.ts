import {
  Cast,
  Drop,
  Length,
} from './_typeUtils'

export interface ICurry1<A, R> {
  (): ICurry1<A, R>
  (a: A | undefined): R
}

interface ICurry2<A, B, R> {
  (): ICurry2<A, B, R>
  (a: A | undefined): ICurry1<B, R>
  (a: A | undefined, b: B | undefined): R
}

interface ICurry3<A, B, C, R> {
  (): ICurry3<A, B, C, R>
  (a: A | undefined): ICurry2<B, C, R>
  (a: A | undefined, b: B | undefined): ICurry1<C, R>
  (a: A | undefined, b: B | undefined, c: C | undefined): R
}

interface ICurry4<A, B, C, D, R> {
  (): ICurry4<A, B, C, D, R>
  (a: A | undefined): ICurry3<B, C, D, R>
  (a: A | undefined, b: B | undefined): ICurry2<C, D, R>
  (a: A | undefined, b: B | undefined, c: C | undefined): ICurry1<D, R>
  (a: A | undefined, b: B | undefined, c: C | undefined, d: D | undefined): R
}

// N 个参数的函数柯里化
export type TCurryN<T extends any[], R> =
  <P extends any[]>(...args: Cast<P, Partial<T>>) =>
    // A.1 剩余参数数量只有一个，则走 curry1
    Drop<Length<P>, T> extends [infer A] ? ICurry1<Cast<A, any>, R>
    // A.2 剩余参数如果有两个，走 curry2
    : Drop<Length<P>, T> extends [infer A, infer B] ? ICurry2<Cast<A, any>, Cast<B, any>, R>
      // A.3 剩余参数如果编译 3个，走 curry3
      : Drop<Length<P>, T> extends [infer A, infer B, infer C] ? ICurry3<Cast<A, any>, Cast<B, any>, Cast<C, any>, R>
        // A.3 剩余参数如果编译 4个，走 curry4
        : Drop<Length<P>, T> extends [infer A, infer B, infer C, infer D] ? ICurry4<Cast<A, any>, Cast<B, any>, Cast<C, any>, Cast<D, any>, R>
          // 剩余更多参数，走 curryN
          : Drop<Length<P>, T> extends [any, ...any[]] ? TCurryN<Drop<Length<P>, T> extends infer DT ? Cast<DT, any[]> : never, R>
    // B. 没有剩余参数可消耗，则返回最终结果
    : R

const slice = Array.prototype.slice

const symbolFlag = Symbol('curried')

/**
 * 1 个参数的函数柯里化
 */
export function curry1<A, R>(fn: (a: A) => R): ICurry1<A, R> {
  function curried(a?: A | undefined) {
    switch (arguments.length) {
      case 1: return fn(a)
      case 0: return curried
      // 支持传入的额外参数
      default: return fn.apply(void 0, arguments)
    }
  }
  return curried
}
// const curry1Test1 = curry1((a: number) => a)
// const curry1Test2 = curry1Test1(3)


/**
 * 2 个参数的函数柯里化
 */
export function curry2<A, B, R>(fn: (a: A, b: B) => R): ICurry2<A, B, R> {
  function curried(a?: A | B | undefined, b?: B | undefined) {
    switch (arguments.length) {
      case 1: return curry1<B, R>(function(b) {
        if (arguments.length === 1) return fn(a as A, b)
        const args = [a]
        // 支持传入的额外参数
        args.push.apply(args, arguments)
        return fn.apply(void 0, args)
      })
      case 2: return fn(a as A, b)
      case 0: return curried
      // 支持传入的额外参数
      default: return fn.apply(void 0, arguments)
    }
  }

  return curried
}

// const curry2Test1 = curry2((a: number, b: string) => a + b)
// const curry2Test2 = curry2Test1(3)
// const curry2Test3 = curry2Test2('4')


/**
 * 3 个参数的函数柯里化
 */
export function curry3<A, B, C, R>(fn: (a: A, b: B, c: C) => R): ICurry3<A, B, C, R>  {
  function curried(a?: A | B | C | undefined, b?: B | C | undefined, c?: C | undefined) {
    switch(arguments.length) {
      case 1: return curry2<B, C, R>(function(b, c) {
        if (arguments.length === 2) return fn(a as A, b, c)

        // 支持传入的额外参数
        const args = [a]
        args.push.apply(args, arguments)
        return fn.apply(void 0, args)
      })
      case 2: return curry1<C, R>(function(c) {
        if (arguments.length === 1) return fn(a as A, b as B, c)

        // 支持传入的额外参数
        const args = [a, b]
        args.push.apply(args, arguments)
        return fn.apply(void 0, args)
      })
      case 3: return fn(a as A, b as B, c as C)
      case 0: return curried
      default: return fn.apply(void 0, arguments)
    }
  }

  return curried
}

// const curry3Test1 = curry3((a: number, b: string, c: string) => a + b + c)
// const curry3Test2 = curry3Test1(3)
// const curry3Test3 = curry3Test2('4')
// const curry3Test4 = curry3Test3('5')


/**
 * 4 个参数的函数柯里化
 */
export function curry4<A, B, C, D, R>(fn: (a: A, b: B, c: C, d: D) => R): ICurry4<A, B, C, D, R>  {
  function curried(a?: A | B | C | undefined, b?: B | C | undefined, c?: C | undefined, d?) {
    switch(arguments.length) {
      case 1: return curry3<B, C, D, R>(function(b, c, d) {
        if (arguments.length === 3) return fn(a as A, b, c, d)
        const args = [a]
        args.push.apply(args, arguments)
        return fn.apply(void 0, args)
      })
      case 2: return curry2<C, D, R>(function(c, d) {
        if (arguments.length === 2) return fn(a as A, b as B, c, d)
        const args = [a, b]
        args.push.apply(args, arguments)
        return fn.apply(void 0, args)
      })
      case 3: return curry1<D, R>(function(d) {
        if (arguments.length === 1) return fn(a as A, b as B, c as C, d)
        const args = [a, b, c]
        args.push.apply(args, arguments)
        return fn.apply(void 0, args)
      })
      case 4: return fn(a as A, b as B, c as C, d as D)
      case 0: return curried
      default: return fn.apply(void 0, arguments)
    }
  }

  return curried
}

export function curryN<P extends any[], R>(fn: (...args: P) => R, n?: number): TCurryN<P, R> {
  // 首次调用可以使用 fn 获取参数数量
  if (n === undefined) n = fn.length
  
  return function() {
    const consumedN = arguments.length
    const restN = n - consumedN

    if (restN <= 0) {
      return fn.apply(void 0, arguments)
    }

    const consumedArgs = slice.call(arguments)

    // curry1 - curry4 覆盖大部分使用场景，可以提高性能（FF 除外）
    if (restN === 1) {
      const curried = curry1(function(a) {
        consumedArgs.push(a)
        return fn.apply(void 0, consumedArgs)
      })
      return curried
    } 

    if (restN === 2) {
      const curried = curry2(function (a, b) {
        consumedArgs.push(a, b)
        return fn.apply(void 0, consumedArgs)
      })
      return curried
    } 

    if (restN === 3) {
      const curried = curry3(function (a, b, c) {
        consumedArgs.push(a, b, c)
        return fn.apply(void 0, consumedArgs)
      })
      return curried
    }

    if (restN === 4) {
      const curried = curry4(function (a, b, c, d) {
        consumedArgs.push(a, b, c, d)
        return fn.apply(void 0, consumedArgs)
      })
      return curried
    }

    return curryN(function() {
      consumedArgs.push.apply(consumedArgs, arguments)
      return fn.apply(void 0, consumedArgs)
    }, restN)
  }
}

// const curryNTest1 = curryN((a: number) => a)
// const curryNTest2 = curryNTest1(1)

// const curryNTest3 = curryN((a: number, b: number) => a + b)
// const curryNTest4 = curryNTest3(1)(2)

// const curryNTest5 = curryN((a: number, b: number, c: number) => a + b + c)
// const curryNTest6 = curryNTest5(1)(2)(3)

// const curryNTest7 = curryN((a: number, b: number, c: number, d: number) => a + b + c + d)
// const curryNTest8 = curryNTest7(1)(2)(3)(4)

// const curryNTest9 = curryN((a: number, b: number) => a + b)
// const curryNTest10 = curryNTest9(1)(2)

// const curryNTest11 = curryN((a: number, b: number, c: number, d: number, e: number) => a + b + c + d + e)
// const curryNTest12 = curryNTest11(1)(2)(3,4)(5)

/**
 * 柯里化
 */
export function curry<P extends any[], R>(fn: (() => R)): typeof fn
export function curry<P extends any[], R>(fn: ((a: P[0]) => R)): ICurry1<P[0], R>
export function curry<P extends any[], R>(fn: ((a: P[0], b: P[1]) => R)): ICurry2<P[0], P[1], R>
export function curry<P extends any[], R>(fn: ((a: P[0], b: P[1], c: P[2]) => R)): ICurry3<P[0], P[1], P[2], R>
export function curry<P extends any[], R>(fn: ((a: P[0], b: P[1], c: P[2], d: P[3]) => R)): ICurry4<P[0], P[1], P[2], P[3], R>
export function curry<P extends any[], R>(fn: ((...args: P) => R)): TCurryN<P, R>

export function curry(fn) {
  if (fn[symbolFlag]) return fn
  const length = fn.length
  switch(length) {
    // 将可能匹配的参数数量按照经验的概率排列
    case 2: {
      const curried = curry2(fn)
      curried[symbolFlag] = true
      return curried
    }
    case 1: {
      const curried = curry1(fn)
      curried[symbolFlag] = true
      return curried
    }
    case 3: {
      const curried = curry3(fn)
      curried[symbolFlag] = true
      return curried
    }
    case 4: {
      const curried = curry4(fn)
      curried[symbolFlag] = true
      return curried
    }
    case 0: {
      return fn
    }
    default: {
      const curried = curryN(fn)
      curried[symbolFlag] = true
      return curried
    }
  }
}
// const T_C_1 = curry((a: number) => a)
// const T_C_1_1 = T_C_1(1)

export default curry
