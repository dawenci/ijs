import { _pipe } from './internal/_pipe'
import { curry1 } from './curry';

/**
 * 创建一个函数管道，参数列表中第一个函数为入口，
 * 入口可以接受多个参数，其他函数接受一个函数（接受前一个函数的返回值）
 *
 * @param {Array<(...args: any[]) => any>} fnList 函数列表
 * @see I.compose
 */

// 实现
function pipe(fnList: Array<(...args: any[]) => any>) {
  if (!fnList || !fnList.length) return curry1(pipe)
  return _pipe(fnList)
}

export default curry1(pipe)
