import { _pipe } from './internal/_pipe'
import { curry1 } from './curry';

/**
 * 创建一个函数组合，参数列表中最后一个函数为入口，
 * 入口可以接受多个参数，其他函数接受一个函数（接受前一个函数的返回值）
 *
 * @param {Array<(...args: any[]) => any>} fnList 函数列表
 * @see I.pipe
 */

// 实现
function compose(fnList: Array<(...args: any[]) => any>) {
  if (!fnList || !fnList.length) return curry1(compose)
  return _pipe(fnList.slice().reverse())
}

export default curry1(compose)
