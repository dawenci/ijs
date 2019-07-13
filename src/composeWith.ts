import { curry2 } from './curry'
import _pipeWith from './internal/_pipeWith'

/**
 * 创建一个函数组合，参数列表中最后一个函数为入口，
 * 入口可以接受多个参数，其他函数接受一个函数（接受前一个函数的返回值）
 * 值传递到下一个函数之前，经过 withFn 加工处理（如处理 undefined 等等）
 * 
 * @param {Array<(...args: any[]) => any>} fnList 函数列表
 * @see I.pipe
 */
function composeWith(
  withFn: (fn: (value: any) => any, value: any) => any,
  fnList: Array<(...args: any[]) => any>
) {
  const list = fnList.slice().reverse()
  return _pipeWith(withFn, list)
}

export default curry2(composeWith)
