import { curry1, curryN } from './curry'

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
function flip (fn: Function) {
  const n = fn.length
  if (n >= 2) {
    return curryN(function() {
      const args = slice.call(arguments)
      const firstArg = args[0]
      args[0] = args[1]
      args[1] = firstArg
      return fn.apply(void 0, args)
    }, n)
  }
  return curry1(fn as (a: any)=>any)
}

export default curry1(flip)
