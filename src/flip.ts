import {
  Curry1, Curry2, Curry3, Curry4, Curry5, Curry6, Curry7, Curry8, Curry9, Curry10, Curried,
} from './curry/types'

import curry, { _CURRY_ } from './curry'
import { Flip } from './_typeUtils'

import arity from './internal/_arity'

const slice = Array.prototype.slice

export const _FLIP_ = typeof Symbol === 'function' ? Symbol('_FLIP_') : '_FLIP_'

/**
 * 交换 fn 的头两个参数
 * 返回柯里化后的新函数
 * 
 * ! 注意，flip(flip(fn)) 这样多重 flip 不支持超过 10 个的参数，超出会出现类型丢失问题
 * 
 * 对比：
 * I.curry((a, b) => a - b)(1, 2) // -1
 * I.flip((a, b) => a - b)(1, 2) // 1
 * 
 */
function flip<P extends any[], R>(): typeof flip
function flip<P extends any[], R>(fn: (() => R)): typeof fn
function flip<A,R>(fn: ((a: A) => R)): Curry1<A,R>
function flip<A,B,R>(fn: ((a:A,b:B) => R)): Curry2<B,A,R>
function flip<A,B,C,R>(fn: ((a:A,b:B,c:C) => R)): Curry3<B,A,C,R>
function flip<A,B,C,D,R>(fn: ((a:A,b:B,c:C,d:D) => R)): Curry4<B,A,C,D,R>
function flip<A,B,C,D,E,R>(fn: ((a:A,b:B,c:C,d:D,e:E) => R)): Curry5<B,A,C,D,E,R>
function flip<A,B,C,D,E,F,R>(fn: ((a:A,b:B,c:C,d:D,e:E,f:F) => R)): Curry6<B,A,C,D,E,F,R>
function flip<A,B,C,D,E,F,G,R>(fn: ((a:A,b:B,c:C,d:D,e:E,f:F,g:G) => R)): Curry7<B,A,C,D,E,F,G,R>
function flip<A,B,C,D,E,F,G,H,R>(fn: ((a:A,b:B,c:C,d:D,e:E,f:F,g:G,h:H) => R)): Curry8<B,A,C,D,E,F,G,H,R>
function flip<A,B,C,D,E,F,G,H,I,R>(fn: ((a:A,b:B,c:C,d:D,e:E,f:F,g:G,h:H,i:I) => R)): Curry9<B,A,C,D,E,F,G,H,I,R>
function flip<A,B,C,D,E,F,G,H,I,J,R>(fn: ((a:A,b:B,c:C,d:D,e:E,f:F,g:G,h:H,i:I,j:J) => R)): Curry10<B,A,C,D,E,F,G,H,I,J,R>
function flip<P extends any[], R>(fn: (...args: P) => R): Curried<Flip<P>, R>

function flip<P extends any[], R>(fn?)  {
  if (arguments.length == 0) return flip
  const n = fn[_CURRY_] || fn.length

  // 已经反转过的，使用翻转前的函数 curry 化即可
  if (fn[_FLIP_]) {
    let flipped = fn[_FLIP_]
    if (!flipped[_CURRY_]) flipped = curry(flipped)
    flipped[_FLIP_] = fn
    return flipped
  }

  if (n === 0) return fn
  if (n === 1) return curry(fn)
  if (n === 2) {
    const c2 = curry((a,b) => fn(b,a))
    c2[_FLIP_] = fn
    return c2
  } 
  if (n === 3) {
    const c3 = curry((a,b,c) => fn(b,a,c))
    c3[_FLIP_] = fn
    return c3
  } 
  if (n === 4) {
    const c4 = curry((a,b,c,d) => fn(b,a,c,d))
    c4[_FLIP_] = fn
    return c4
  }
  if (n === 5) {
    const c5 = curry((a,b,c,d,e) => fn(b,a,c,d,e))
    c5[_FLIP_] = fn
    return c5
  }

  // 大于 4 个参数，则重新包装一次函数，以确保维持 length
  const wrapper = arity<P, R>(n, function() {
    const args = slice.call(arguments)
    const firstArg = args[0]
    args[0] = args[1]
    args[1] = firstArg
    return fn.apply(void 0, args)
  })
  const cN = curry(wrapper)
  cN[_FLIP_] = fn

  return cN
}

export default flip
