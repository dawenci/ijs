import curry, { curryN, Curry, CURRY_STATUS } from './curry'

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
function flip<P extends any[], R>(fn: (...args: P) => R): Curry<P, R>

function flip <P extends any[], R>(fn?)  {
  if (arguments.length == 0) {
    return flip
  }

  const n = fn[CURRY_STATUS] || fn.length
  if (n === 0) return fn
  if (n === 1) return curry(fn)

  return curryN<P, R>(function() {
    const args = slice.call(arguments)
    const firstArg = args[0]
    args[0] = args[1]
    args[1] = firstArg
    return fn.apply(void 0, args)
  }, n)
}

const t000 = flip()

const t111 = flip(() => 3)
const t1111 = t111()

const t222 = flip((a: number) => a)
const t2222 = t222(1)

const fn = (a: number, b: string) => a + b
const t333 = flip(fn)
const t3333 = t333(1, '2')
const t33333 = t333(1)('2')

const t444 = flip(flip(fn))
const t4444 = t444()
const t44444 = t4444(1, '2')



export default flip
