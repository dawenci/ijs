import { _pipeWith } from './internal/_pipeWith'
import { _curry2 } from './internal/_curry'

/**
 * 创建一个函数组合，参数列表中最后一个函数为入口，
 * 入口可以接受多个参数，其他函数接受一个函数（接受前一个函数的返回值）
 *
 * @param {Array<(...args: any[]) => any>} fnList 函数列表
 * @see I.pipe
 */

// 函数列表，以及衔接函数之间的函数。值传递到下一个函数之前，经过该函数加工处理（如处理 undefined 等等）
function composeWith(xform: (fn: (value: any) => any, value: any) => any, fnList: Array<(...args: any[]) => any>) {
  if (typeof xform !== 'function') return _curry2(composeWith)
  if (!fnList || !fnList.length) return _curry2(composeWith)(xform)
  return _pipeWith(xform, fnList.slice().reverse())
}

export default _curry2(composeWith)
