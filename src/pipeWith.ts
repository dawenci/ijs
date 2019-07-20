import { _pipeWith } from './internal/_pipeWith'
import { curry2 } from './curry';

/**
 * 创建一个函数管道，参数列表中第一个函数为入口，
 * 入口可以接受多个参数，其他函数接受一个函数（接受前一个函数的返回值）
 *
 * @param {Array<(...args: any[]) => any>} fnList 函数列表
 * @see I.compose
 */

// 函数列表，以及衔接函数之间的函数。值传递到下一个函数之前，经过该函数加工处理（如处理 undefined 等等）
function pipeWith(xform: (fn: (value: any) => any, value: any) => any, fnList: Array<(...args: any[]) => any>) {
  if (typeof xform !== 'function') return curry2(pipeWith)
  if (!fnList || !fnList.length) return curry2(pipeWith)(xform)
  return _pipeWith(xform, fnList)
}

export default curry2(pipeWith)
