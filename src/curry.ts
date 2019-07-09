import { Cast, Drop, Length } from './_typeUtils'

export interface Curry1<A, R> {
  (): Curry1<A, R>
  (a: A): R
}

export interface Curry2<A, B, R> {
  (): Curry2<A, B, R>
  (a: A): Curry1<B, R>
  (a: A, b: B): R
}

export interface Curry3<A, B, C, R> {
  (): Curry3<A, B, C, R>
  (a: A): Curry2<B, C, R>
  (a: A, b: B): Curry1<C, R>
  (a: A, b: B, c: C): R
}

export interface Curry4<A, B, C, D, R> {
  (): Curry4<A, B, C, D, R>
  (a: A): Curry3<B, C, D, R>
  (a: A, b: B): Curry2<C, D, R>
  (a: A, b: B, c: C): Curry1<D, R>
  (a: A, b: B, c: C, d: D): R
}

// N 个参数的函数柯里化
export type Curry<PARAMS extends any[], R> = <ARGS extends any[]>(...args: Cast<ARGS, Partial<PARAMS>>) =>
  // 没有剩余参数可消耗，则返回最终结果
  Drop<Length<ARGS>, PARAMS> extends [] ? R
  // A.1 剩余参数数量只有一个，则走 curry1
  : Drop<Length<ARGS>, PARAMS> extends [infer A] ? Curry1<Cast<A, any>, R>
    // A.2 剩余参数如果有两个，走 curry2
    : Drop<Length<ARGS>, PARAMS> extends [infer A, infer B] ? Curry2<Cast<A, any>, Cast<B, any>, R>
      // A.3 剩余参数如果编译 3个，走 curry3
      : Drop<Length<ARGS>, PARAMS> extends [infer A, infer B, infer C] ? Curry3<Cast<A, any>, Cast<B, any>, Cast<C, any>, R>
        // A.3 剩余参数如果编译 4个，走 curry4
        : Drop<Length<ARGS>, PARAMS> extends [infer A, infer B, infer C, infer D] ? Curry4<Cast<A, any>, Cast<B, any>, Cast<C, any>, Cast<D, any>, R>
          // 剩余更多参数，走 curryN
          : Drop<Length<ARGS>, PARAMS> extends [any, ...any[]] ? Curry<Drop<Length<ARGS>, PARAMS> extends infer REST ? Cast<REST, any[]> : never, R> : never

const slice = Array.prototype.slice

export const _CURRY_ = typeof Symbol === 'function' ? Symbol('_CURRY_') : '_CURRY_'

/**
 * 1 个参数的函数柯里化
 */
export function curry1<A, R>(fn: (a: A) => R): Curry1<A, R> {
  function curried()
  function curried(a: A)
  function curried(a?) {
    // 不支持超出声明的参数，不传递整个 arguments
    if (arguments.length) return fn(a)
    return curried
  }
  curried[_CURRY_] = 1
  return curried
}

// const curry1Test1 = curry1((a: number) => a)
// const curry1Test2 = curry1Test1(3)


/**
 * 2 个参数的函数柯里化
 */
export function curry2<A, B, R>(fn: (a: A, b: B) => R): Curry2<A, B, R> {
  function curried()
  function curried(a: A)
  function curried(a: A, b: B)
  function curried(a?, b?) {
    switch (arguments.length) {
      case 1: return curry1<B, R>((b) => fn(a as A, b))
      case 2: return fn(a as A, b)
      case 0: return curried
      // 不支持超出声明的参数，不传递整个 arguments
      default: return fn(a as A, b)
    }
  }
  curried[_CURRY_] = 2
  return curried
}

// const curry2Test1 = curry2((a: number, b: string) => a + b)
// const curry2Test2 = curry2Test1(3)
// const curry2Test3 = curry2Test2('4')


/**
 * 3 个参数的函数柯里化
 */
export function curry3<A, B, C, R>(fn: (a: A, b: B, c: C) => R): Curry3<A, B, C, R>  {
  function curried()
  function curried(a: A)
  function curried(a: A, b: B)
  function curried(a: A, b: B, c: C)
  function curried(a?, b?, c?) {
    switch(arguments.length) {
      case 1: return curry2<B, C, R>((b, c) => fn(a as A, b, c))
      case 2: return curry1<C, R>((c) => fn(a as A, b as B, c))
      case 3: return fn(a as A, b as B, c as C)
      case 0: return curried
      // 不支持超出声明的参数，不传递整个 arguments
      default: return fn(a as A, b as B, c as C)
    }
  }
  curried[_CURRY_] = 3
  return curried
}

// const curry3Test1 = curry3((a: number, b: string, c: string) => a + b + c)
// const curry3Test2 = curry3Test1(3)
// const curry3Test3 = curry3Test2('4')
// const curry3Test4 = curry3Test3('5')


/**
 * 4 个参数的函数柯里化
 */
export function curry4<A, B, C, D, R>(fn: (a: A, b: B, c: C, d: D) => R): Curry4<A, B, C, D, R>  {
  function curried()
  function curried(a: A)
  function curried(a: A, b: B)
  function curried(a: A, b: B, c: C)
  function curried(a: A, b: B, c: C, d: D)
  function curried(a?, b?, c?, d?) {
    switch(arguments.length) {
      case 1: return curry3<B, C, D, R>((b, c, d) => fn(a as A, b, c, d))
      case 2: return curry2<C, D, R>((c, d) => fn(a as A, b as B, c, d))
      case 3: return curry1<D, R>((d) =>fn(a as A, b as B, c as C, d))
      case 4: return fn(a as A, b as B, c as C, d as D)
      case 0: return curried
      // 不支持超出声明的参数，不传递整个 arguments
      default: return fn(a as A, b as B, c as C, d as D)
    }
  }
  curried[_CURRY_] = 4
  return curried
}

/**
 * N 个参数的函数柯里化
 */
export function curryN<P extends any[], R>(fn: (...args: P) => R, n?: number): Curry<P, R> {
  // 首次调用可以使用 fn 获取参数数量
  if (n === undefined) n = fn.length
  
  function curried() {
    const consumedN = arguments.length
    const restN = n - consumedN

    if (restN <= 0) {
      // 不支持超出声明的参数，不传递整个 arguments，切下合法部分
      return fn.apply(void 0, slice.call(arguments, 0, n))
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
      // 不支持超出声明的参数，不传递整个 arguments，切下合法部分
      consumedArgs.push.apply(consumedArgs, slice.call(arguments, restN))
      return fn.apply(void 0, consumedArgs)
    }, restN)
  }

  curried[_CURRY_] = n
  return curried
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
 * 柯里化对外 API
 */
export function curry<P extends any[], R>(fn: (() => R)): typeof fn
export function curry<P extends any[], R>(fn: ((a: P[0]) => R)): Curry1<P[0], R>
export function curry<P extends any[], R>(fn: ((a: P[0], b: P[1]) => R)): Curry2<P[0], P[1], R>
export function curry<P extends any[], R>(fn: ((a: P[0], b: P[1], c: P[2]) => R)): Curry3<P[0], P[1], P[2], R>
export function curry<P extends any[], R>(fn: ((a: P[0], b: P[1], c: P[2], d: P[3]) => R)): Curry4<P[0], P[1], P[2], P[3], R>
export function curry<P extends any[], R>(fn: ((...args: P) => R)): Curry<P, R>

export function curry(fn) {

  // 柯里化已经柯里化的函数，特殊处理
  // 作为唯一的对外出口，在此处检查即可
  const length = fn[_CURRY_] || fn.length

  switch(length) {
    // 将可能匹配的参数数量按照经验的概率排列
    case 2: {
      return curry2(fn)
    }
    case 1: {
      return curry1(fn)
    }
    case 3: {
      return curry3(fn)
    }
    case 4: {
      return curry4(fn)
    }
    case 0: {
      return fn
    }
    default: {
      return curryN(fn, length)
    }
  }
}
const T_C_1 = curry((a: number) => a)
const T_C_1_1 = T_C_1(1)

export default curry
