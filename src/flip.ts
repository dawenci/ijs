import curry, { Curry, Curry1, Curry2, Curry3, Curry4, _CURRY_ } from './curry'
import { Flip } from './_typeUtils'

const slice = Array.prototype.slice

/**
 * 交换 fn 的头两个参数
 * 返回柯里化后的新函数
 * 
 * 对比：
 * Rf.curry((a, b) => a - b)(1, 2) // -1
 * Rf.flip((a, b) => a - b)(1, 2) // 1
 * 
 */
function flip<P extends any[], R>(): typeof flip
function flip<P extends any[], R>(fn: () => R): typeof fn
function flip<P extends any[], R>(fn: (a: P[0]) => R): Curry1<P[0], R>
function flip<P extends any[], R>(fn: (a: P[0], b: P[1]) => R): Curry2<P[1], P[0], R>
function flip<P extends any[], R>(fn: (a: P[0], b: P[1], c: P[2]) => R): Curry3<P[1], P[0], P[2], R>
function flip<P extends any[], R>(fn: (a: P[0], b: P[1], c: P[2], d: P[3]) => R): Curry4<P[1], P[0], P[2], P[3], R>
function flip<P extends any[], R>(fn: (...args: P) => R): Curry<Flip<P>, R>

function flip <P extends any[], R>(fn?)  {
  if (arguments.length == 0) return flip
  const n = fn[_CURRY_] || fn.length
  if (n === 0) return fn
  if (n === 1) return curry(fn)
  if (n === 2) return curry((a, b) => fn(b, a))
  if (n === 3) return curry((a, b, c) => fn(b, a, c))
  if (n === 4) return curry((a, b, c, d) => fn(b, a, c, d))
  const flipped = curry(function() {
    const args = slice.call(arguments)
    const firstArg = args[0]
    args[0] = args[1]
    args[1] = firstArg
    return fn.apply(void 0, args)
  })()
  return flipped
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
