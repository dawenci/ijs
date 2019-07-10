import { Cast } from '../_typeUtils'
import {
  Arity1, Arity2, Arity3, Arity4, Arity5, Arity6,
  Curry1, Curry2, Curry3, Curry4, Curry5, Curry6, Curry7, Curry8, Curry9, Curry10, Curried
} from './types'

import _arity from './arity'

const slice = Array.prototype.slice

export const _CURRY_ = typeof Symbol === 'function' ? Symbol('_CURRY_') : '_CURRY_'


// 1 - 5 个参数，特殊处理，提高性能
export function curry1<A, R>(fn: Arity1<A, R>) {
  // 重载
  function curried(): Curry1<A, R>
  function curried(a: A): R
  // 实现
  function curried(a?) {
    // 不支持超出声明的参数，不传递整个 arguments
    if (arguments.length) return fn(a)
    return curried
  }
  curried[_CURRY_] = 1
  return curried
}

export function curry2<A, B, R>(fn: Arity2<A, B, R>) {
  // 重载
  function curried(): Curry2<A, B, R>
  function curried(a: A): Curry1<B, R>
  function curried(a: A, b: B): R
  // 实现
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

export function curry3<A, B, C, R>(fn: Arity3<A, B, C, R>) {
  // 重载
  function curried(): Curry3<A, B, C, R>
  function curried(a: A): Curry2<B, C, R>
  function curried(a: A, b: B): Curry1<C, R>
  function curried(a: A, b: B, c: C): R
  // 实现
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

export function curry4<A, B, C, D, R>(fn: Arity4<A, B, C, D, R>) {
  // 重载
  function curried(): Curry4<A, B, C, D, R>
  function curried(a: A): Curry3<B, C, D, R>
  function curried(a: A, b: B): Curry2<C, D, R>
  function curried(a: A, b: B, c: C): Curry1<D, R>
  function curried(a: A, b: B, c: C, d: D): R
  // 实现
  function curried(a?, b?, c?, d?) {
    switch(arguments.length) {
      case 1: return curry3<B, C, D, R>((b, c, d) => fn(a, b, c, d))
      case 2: return curry2<C, D, R>((c, d) => fn(a, b, c, d))
      case 3: return curry1<D, R>((d) =>fn(a, b, c, d))
      case 4: return fn(a, b, c, d)
      case 0: return curried
      // 不支持超出声明的参数，不传递整个 arguments
      default: return fn(a, b, c, d)
    }
  }
  curried[_CURRY_] = 4
  return curried
}

export function curry5<A, B, C, D, E, R>(fn: Arity5<A, B, C, D, E, R>) {
  // 重载
  function curried(): Curry5<A, B, C, D, E, R>
  function curried(a: A): Curry4<B, C, D, E, R>
  function curried(a: A, b: B): Curry3<C, D, E, R>
  function curried(a: A, b: B, c: C): Curry2<D, E, R>
  function curried(a: A, b: B, c: C, d: D): Curry1<E, R>
  function curried(a: A, b: B, c: C, d: D, e: E): R
  // 实现
  function curried(a?, b?, c?, d?, e?) {
    switch(arguments.length) {
      case 1: return curry4<B, C, D, E, R>((b, c, d, e) => fn(a, b, c, d, e))
      case 2: return curry3<C, D, E, R>((c, d, e) => fn(a, b, c, d, e))
      case 3: return curry2<D, E, R>((d, e) => fn(a, b, c, d, e))
      case 4: return curry1<E, R>((e) =>fn(a, b, c, d, e))
      case 5: return fn(a, b, c, d, e)
      case 0: return curried
      // 不支持超出声明的参数，不传递整个 arguments
      default: return fn(a, b, c, d, e)
    }
  }
  curried[_CURRY_] = 4
  return curried
}

/**
 * N 个参数的函数柯里化
 */
export function curryN<P extends any[], R>(fn: (...args: P) => R, arity?: number): Curried<P, R> {
  // 首次调用可以使用 fn 获取参数数量
  if (arity === undefined) arity = fn.length
  
  function curried() {
    const consumed = arguments.length
    const rest = arity - consumed
    if (rest <= 0) {
      // 不支持超出声明的参数，不传递整个 arguments，切下合法部分
      return fn.apply(void 0, slice.call(arguments, 0, arity))
    }
    const consumedArgs = slice.call(arguments)
    // curry1 - curry10 覆盖大部分使用场景，可以提高性能（FF 除外）
    switch (rest) {
      case 1: return curry1(a => {
        consumedArgs.push(a)
        return fn.apply(void 0, consumedArgs)
      })
      case 2: return curry2((a, b) => {
        consumedArgs.push(a, b)
        return fn.apply(void 0, consumedArgs)
      })
      case 3: return curry3((a, b, c) => {
        consumedArgs.push(a, b, c)
        return fn.apply(void 0, consumedArgs)
      })
      case 4: return curry4((a, b, c, d) => {
        consumedArgs.push(a, b, c, d)
        return fn.apply(void 0, consumedArgs)
      })
      case 5: return curry5((a, b, c, d, e) => {
        consumedArgs.push(a, b, c, d, e)
        return fn.apply(void 0, consumedArgs)
      })
    }

    return curry(_arity(rest, function() {
      // 不支持超出声明的参数，不传递整个 arguments，切下合法部分
      consumedArgs.push.apply(consumedArgs, slice.call(arguments, rest))
      return fn.apply(void 0, consumedArgs)
    }))
  }

  curried[_CURRY_] = arity
  return curried
}

/**
 * 柯里化对外 API
 */
export function curry<P extends any[], R>(fn: (() => R)): typeof fn
export function curry<A,R>(fn: ((a: A) => R)): Curry1<A,R>
export function curry<A,B,R>(fn: ((a:A,b:B) => R)): Curry2<A,B,R>
export function curry<A,B,C,R>(fn: ((a:A,b:B,c:C) => R)): Curry3<A,B,C,R>
export function curry<A,B,C,D,R>(fn: ((a:A,b:B,c:C,d:D) => R)): Curry4<A,B,C,D,R>
export function curry<A,B,C,D,E,R>(fn: ((a:A,b:B,c:C,d:D,e:E) => R)): Curry5<A,B,C,D,E,R>
export function curry<A,B,C,D,E,F,R>(fn: ((a:A,b:B,c:C,d:D,e:E,f:F) => R)): Curry6<A,B,C,D,E,F,R>
export function curry<A,B,C,D,E,F,G,R>(fn: ((a:A,b:B,c:C,d:D,e:E,f:F,g:G) => R)): Curry7<A,B,C,D,E,F,G,R>
export function curry<A,B,C,D,E,F,G,H,R>(fn: ((a:A,b:B,c:C,d:D,e:E,f:F,g:G,h:H) => R)): Curry8<A,B,C,D,E,F,G,H,R>
export function curry<A,B,C,D,E,F,G,H,I,R>(fn: ((a:A,b:B,c:C,d:D,e:E,f:F,g:G,h:H,i:I) => R)): Curry9<A,B,C,D,E,F,G,H,I,R>
export function curry<A,B,C,D,E,F,G,H,I,J,R>(fn: ((a:A,b:B,c:C,d:D,e:E,f:F,g:G,h:H,i:I,j:J) => R)): Curry10<A,B,C,D,E,F,G,H,I,J,R>
export function curry<P extends any[], R>(fn: ((...args: P) => R)): Curried<P, R>

export function curry(fn) {
  // 柯里化已经柯里化的函数，特殊处理
  // 作为唯一的对外出口，在此处检查即可
  const length = fn[_CURRY_] || fn.length

  switch(length) {
    // 将可能匹配的参数数量按照经验的概率排列
    case 2: return curry2(fn)
    case 1: return curry1(fn)
    case 3: return curry3(fn)
    case 4: return curry4(fn)
    case 5: return curry5(fn)
    case 0: return fn
    default: return curryN(fn, length)
  }
}

export default curry
