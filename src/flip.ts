import { curry1, curryN, TCurryN, ICurry1 } from './curry'

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
function flip<P extends any[], R>(fn: (a: P extends [infer A] ? A : any) => R): ICurry1<P[0], R>
function flip<P extends any[], R>(fn: (...args: P) => R): TCurryN<P, R>

function flip <P extends any[], R>(fn?)  {
  if (arguments.length == 0) {
    return flip
  }
  const n = fn.length
  if (n === 0) return fn
  if (n === 1) return curry1(fn)
  return curryN<P, R>(function() {
    if (n >= 2) {
      const args = slice.call(arguments)
      const firstArg = args[0]
      args[0] = args[1]
      args[1] = firstArg
      return fn.apply(void 0, args)
    }
    return fn.apply(void 0, arguments)
  }, n)
}

// const t000 = flip()

// const t111 = flip(() => 3)
// const t1111 = t111()

// const t222 = flip((a: number) => a)
// const t2222 = t222(1)

// const t333 = flip((a: number, b: string) => a + b)
// const t3333 = t333(1)
// const t33333 = t3333('2')

export default flip
