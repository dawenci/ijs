import {
  Arity1,
  Arity2,
  Arity3,
  Curry1,
  Curry2,
  Curry3,
  Curry4,
  Curry5,
  Curry6,
  Curry7,
  Curry8,
  Curry9,
  Curry10,
  Curried
} from './_types'
import _arity, { ArityType } from '../internal/_arity'

const slice = Array.prototype.slice

export const _CURRY_ = typeof Symbol === 'function' ? Symbol('_CURRY_') : '_CURRY_'
export const _WRAPPER_ = typeof Symbol === 'function' ? Symbol('_WRAPPER_') : '_WRAPPER_'

// 1 - 5 个参数，特殊处理，提高性能
// 支持超出声明的参数，以支持不定长参数的使用场景

export function curry1<A, R>(fn: Arity1<A, R>) {
  // 重载
  function curried(): Curry1<A, R>
  function curried(a: A): R
  function curried(a: A, ...rest: any): R
  // 实现
  function curried(a?) {
    const args = arguments
    switch (args.length) {
      case 1:
        return fn(a)
      case 0:
        return curried

      // 优化
      case 2: return fn(a, args[1])
      case 3: return fn(a, args[1], args[2])

      default:
        return fn.apply(void 0, args)
    }
  }
  curried[_CURRY_] = fn
  return curried
}

export function curry2<A, B, R>(fn: Arity2<A, B, R>) {
  // 重载
  function curried(): Curry2<A, B, R>
  function curried(a: A): Curry1<B, R>
  function curried(a: A, b: B): R
  function curried(a: A, b: B, ...rest: any): R
  // 实现
  function curried(a?, b?) {
    const args = arguments
    switch (args.length) {
      case 1:
        return curry1<B, R>(function(b) {
          const args = arguments
          const len = args.length
          if (len === 1) return fn(a as A, b)

          // 优化
          if (len === 2) return fn(a as A, b as B, args[1])
          if (len === 3) return fn(a as A, b as B, args[1], args[2])

          const combined = [ a as A ]
          combined.push.apply(combined, args)
          return fn.apply(void 0, combined)
        })
      case 2:
        return fn(a as A, b)
      case 0:
        return curried

      // 优化
      case 3: return fn(a as A, b, args[2])
      case 4: return fn(a as A, b, args[2], args[3])

      default:
        return fn.apply(void 0, args)
    }
  }
  curried[_CURRY_] = fn
  return curried
}

export function curry3<A, B, C, R>(fn: Arity3<A, B, C, R>) {
  // 重载
  function curried(): Curry3<A, B, C, R>
  function curried(a: A): Curry2<B, C, R>
  function curried(a: A, b: B): Curry1<C, R>
  function curried(a: A, b: B, c: C): R
  function curried(a: A, b: B, c: C, ...rest: any): R
  // 实现
  function curried(a?, b?, c?) {
    const args = arguments
    switch (args.length) {
      case 1:
        return curry2<B, C, R>(function(b, c) {
          const args = arguments
          const len = args.length
          if (len === 2) return fn(a as A, b, c)

          // 优化
          if (len === 3) return fn(a as A, b as B, c, args[2])
          if (len === 4) return fn(a as A, b as B, c, args[2], args[3])

          const combined = [ a as A ]
          combined.push.apply(combined, args)
          return fn.apply(void 0, combined)
        })
      case 2:
        return curry1<C, R>(function(c) {
          const args = arguments
          const len = args.length
          if (len === 1) return fn(a as A, b as B, c)

          // 优化
          if (len === 2) return fn(a as A, b as B, c, args[1])
          if (len === 3) return fn(a as A, b as B, c, args[1], args[2])

          const combined = [ a as A, b as B ]
          combined.push.apply(combined, args)
          return fn.apply(void 0, combined)
        })
      case 3:
        return fn(a as A, b as B, c as C)
      case 0: return curried

      // 优化
      case 4: return fn(a as A, b as B, c as C, args[3])
      case 5: return fn(a as A, b as B, c as C, args[3], args[4])  

      default:
        return fn.apply(void 0, args)
    }
  }
  curried[_CURRY_] = fn
  return curried
}

/*
 * N 个参数的函数柯里化
 * curry 函数内部使用
 * @param {(...args: P) => R} fn 需要柯里化的原函数
 * @param {number} arity 元数
 */
function curryN<P extends any[], R>(fn: (...args: P) => R, arity: number): Curried<P, R> | ArityType<P, R> {
  function curried() {
    const consumed = arguments.length

    // 传入 0 个参数，重新返回 wrapper 自身
    if (consumed === 0) return curried[_WRAPPER_]

    const rest = arity - consumed
    if (rest <= 0) {
      return fn.apply(void 0, arguments)
    }
    const consumedArgs = slice.call(arguments)

    switch (rest) {
      case 1:
        return curry1(function(a) {
          const args = arguments
          const len = args.length
          if (len === 1) consumedArgs.push(a)
          else if (len === 2) consumedArgs.push(a, args[1])
          else if (len === 3) consumedArgs.push(a, args[1], args[2])
          else consumedArgs.push.apply(consumedArgs, args)
          return fn.apply(void 0, consumedArgs)
        })
      case 2:
        return curry2(function(a, b) {
          const args = arguments
          const len = args.length
          if (len === 2) consumedArgs.push(a, b)
          else if (len === 3) consumedArgs.push(a, b, args[2])
          else if (len === 4) consumedArgs.push(a, b, args[2], args[3])
          else consumedArgs.push.apply(consumedArgs, args)
          return fn.apply(void 0, consumedArgs)
        })
      case 3:
        return curry3(function(a, b, c) {
          const args = arguments
          const len = args.length
          if (len === 3) consumedArgs.push(a, b, c)
          else if (len === 4) consumedArgs.push(a, b, args[3])
          else if (len === 5) consumedArgs.push(a, b, args[3], args[4])
          else consumedArgs.push.apply(consumedArgs, args)
          return fn.apply(void 0, consumedArgs)
        })
      default: {
        return curry(function() {
          consumedArgs.push.apply(consumedArgs, arguments)
          return fn.apply(void 0, consumedArgs)
        }, rest)
      }
    }
  }

  // 使用 wrapper 包裹，以确保 length 正确
  const wrapper = _arity<P, R>(arity, curried)
  curried[_CURRY_] = fn
  // 把 wrapper 当 curried 使用
  wrapper[_CURRY_] = fn

  // 反向引用，以在 wrapper 0 参数调用时，可以不用重新柯里化，直接返回 wrapper
  curried[_WRAPPER_] = wrapper

  return wrapper
}

/**
 * 柯里化对外 API
 */
export function curry<P extends any[], R>(fn: (() => R)): typeof fn
export function curry<A, R>(fn: ((a: A) => R)): Curry1<A, R>
export function curry<A, B, R>(fn: ((a: A, b: B) => R)): Curry2<A, B, R>
export function curry<A, B, C, R>(fn: ((a: A, b: B, c: C) => R)): Curry3<A, B, C, R>
export function curry<A, B, C, D, R>(fn: ((a: A, b: B, c: C, d: D) => R)): Curry4<A, B, C, D, R>
export function curry<A, B, C, D, E, R>(fn: ((a: A, b: B, c: C, d: D, e: E) => R)): Curry5<A, B, C, D, E, R>
export function curry<A, B, C, D, E, F, R>(fn: ((a: A, b: B, c: C, d: D, e: E, f: F) => R)): Curry6<A, B, C, D, E, F, R>
export function curry<A, B, C, D, E, F, G, R>(
  fn: ((a: A, b: B, c: C, d: D, e: E, f: F, g: G) => R)
): Curry7<A, B, C, D, E, F, G, R>
export function curry<A, B, C, D, E, F, G, H, R>(
  fn: ((a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => R)
): Curry8<A, B, C, D, E, F, G, H, R>
export function curry<A, B, C, D, E, F, G, H, I, R>(
  fn: ((a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => R)
): Curry9<A, B, C, D, E, F, G, H, I, R>
export function curry<A, B, C, D, E, F, G, H, I, J, R>(
  fn: ((a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => R)
): Curry10<A, B, C, D, E, F, G, H, I, J, R>
export function curry<P extends any[], R>(fn: ((...args: P) => R)): Curried<P, R>
// 传入了 arity，则需要手动传入 P，不能使用 fn 的类型来推断，因为参数长度和手工指定的 arity 不一定一致
export function curry<P extends any[], R>(fn: ((...args) => R), arity: number): Curried<P, R>

// 可以传入 arity 指定元数，
// 以支持默认值参数 & rest 参数（目前这么做会失去 TS 类型信息）
// 另外，指定元数后，参数默认值不会被使用
export function curry(fn, arity?: number) {
  const length = arity || fn.length

  // 柯里化已经柯里化的函数，如果元数一致，直接返回
  if (fn[_CURRY_] && fn.length === length) {
    return fn
  }

  switch (length) {
    // 将可能匹配的参数数量按照经验的概率排列
    case 2:
      return curry2(fn)
    case 3:
      return curry3(fn)
    case 1:
      return curry1(fn)
    case 0:
      return fn
    default:
      return curryN(fn, length)
  }
}

export default curry
