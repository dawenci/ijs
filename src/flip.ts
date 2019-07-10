import {
  Arity1, Arity2, Arity3, Arity4, Arity5, Arity6, Arity7, Arity8, Arity9, Arity10, ArityN,
  Curry1, Curry2, Curry3, Curry4, Curry5, Curry6, Curry7, Curry8, Curry9, Curry10, Curried,
} from './curry/types'

import curry, { curryN, _CURRY_ } from './curry'
import { Flip } from './_typeUtils'

import arity from './curry/arity'

const slice = Array.prototype.slice

const _FLIP_ = '_FLIP_'

/**
 * 交换 fn 的头两个参数
 * 返回柯里化后的新函数
 * 
 * 对比：
 * Rf.curry((a, b) => a - b)(1, 2) // -1
 * Rf.flip((a, b) => a - b)(1, 2) // 1
 * 
 */

type FlipType<P extends any[], R> = (...args: P) => 
  P extends [] ? any
  : P extends [infer A] ? Curry1<A, R>
  : P extends [infer A, infer B] ? Curry2<B, A, R>
  : P extends [infer A, infer B, infer C] ? Curry3<B, A, C, R>
  : P extends [infer A, infer B, infer C, infer D] ? Curry4<B, A, C, D, R>
  : P extends [infer A, infer B, infer C, infer D, infer E] ? Curry5<B, A, C, D, E, R>
  : P extends [infer A, infer B, infer C, infer D, infer E, infer F] ? Curry6<B, A, C, D, E, F, R>
  : P extends [infer A, infer B, infer C, infer D, infer E, infer F, infer G] ? Curry7<B, A, C, D, E, F, G, R>
  : P extends [infer A, infer B, infer C, infer D, infer E, infer F, infer G, infer H] ? Curry8<B, A, C, D, E, F, G, H, R>
  : P extends [infer A, infer B, infer C, infer D, infer E, infer F, infer G, infer H, infer I] ? Curry9<B, A, C, D, E, F, G, H, I, R>
  : P extends [infer A, infer B, infer C, infer D, infer E, infer F, infer G, infer H, infer I, infer J] ? Curry10<B, A, C, D, E, F, G, H, I, J, R>
  : Curried<Flip<P>, R>;

function flip<P extends any[], R>(fn: (...args: P) => R): FlipType<P, R>

function flip(fn)  {
  if (arguments.length == 0) return flip
  const n = fn[_CURRY_] || fn.length

  // 已经反转过的，使用翻转前的函数 curry 化即可
  if (fn[_FLIP_]) {
    return curry(fn[_FLIP_])
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
  const wrappedFn = arity<P, R>(n, function() {
    const args = slice.call(arguments)
    const firstArg = args[0]
    args[0] = args[1]
    args[1] = firstArg
    return fn.apply(void 0, args)
  })
  const cN = curry(wrappedFn)
  cN[_FLIP_] = wrappedFn

  return cN
}

export default flip

// type test
const t000 = flip()
const t111 = flip(() => 3)
const t1111 = t111()
const t222 = flip((a: number) => a)
const t2222 = t222(1)
const fn = (a: number, b: string) => a + b
const fnc = curry(fn)
fnc(1)('2')
const fnf = flip(fn)
fnf('1')(2)
const fnff = flip(flip(fn))
fnff(1)('2')
const fnfff = flip(flip(flip(fn)))
fnfff('1')(2)

const f = (a:number,b:string,c:number,d:string,e:number) => a+b+c+d+e
curry(f)(1,'2',3,'4',5)
flip(f)('1',2,3,'4',5)
const ff5 = flip(flip(f))
ff5(1, '2', 3, '4', 5)

// const f10 = (a:number,b:string,c:number,d:string,e:number,f:number,g:number,h:number,i:number,j:number) => a+b+c+d+e
// const ff10 = flip(f10)
// ff10(0, 1,2,3,4,5,6,7,8,9)
