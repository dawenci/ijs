import { curry1 } from './curry'

/**
 * 为列表迭代函数（map、reduce、forEach...等等）函数的回调额外额外附加一个 index 参数
 * @param {Function} fn 原列表迭代函数（如 I.map）
 * @returns {Function} 包裹后的列表迭代函数
 * 
 * @example
 * 
 *   const mapIndexed = I.addIndex(I.map)
 *   mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r'])
 *   //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
 * 
 */
const addIndex = function addIndex(fn) {
  // 第一个元素为作用于每个元素的函数，第二个第三个（如 reduce）为数据
  return function(originFn) {
    const args = Array.prototype.slice.call(arguments, 0)
    let index = 0

    // 使用新函数包裹原来作用于每个元素的旧函数
    const newFn = function() {
      const args = Array.prototype.slice.call(arguments, 0)
      args.push(index)
      const result = originFn.apply(void 0, args)
      index += 1
      return result
    }

    args[0] = newFn
    return fn.apply(void 0, args)
  }
}

export default curry1(addIndex)
