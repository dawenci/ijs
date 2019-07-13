import { curry2 } from './curry'
import _pipeWith from './internal/_pipeWith'

/**
 * 创建一个函数管道，参数列表中第一个函数为入口，
 * 入口可以接受多个参数，其他函数接受一个函数（接受前一个函数的返回值）
 * 值传递到下一个函数之前，经过 withFn 加工处理（如处理 undefined 等等）
 * 
 * @param {Array<(...args: any[]) => any>} fnList 函数列表
 * @see I.compose
 */

export default curry2(_pipeWith)
