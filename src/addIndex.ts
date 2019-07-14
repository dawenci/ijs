import curry, { curry1, _CURRY_ } from './curry'

const slice = Array.prototype.slice

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
const addIndex = function addIndex(originFn) {
  let newFn = function(orginIteratee) {
    const args = slice.call(arguments, 0)

    let index = 0

    // 加一层包裹，额外传递 index 进去
    const newIteratee = function(a, b, c) {
      let result
      switch(arguments.length) {
        case 1: {
          result = orginIteratee(a, index)
          break;
        } 
        case 2: {
          result = orginIteratee(a, b, index)
          break;
        } 
        case 3: {
          result = orginIteratee(a, b, c, index)
          break;
        }
        default: {
          const args = slice.call(arguments, 0)
          args.push(index)
          result = orginIteratee.apply(void 0, args)          
        }
      }
      index += 1
      return result
    }

    args[0] = newIteratee
    return originFn.apply(void 0, args)
  }

  // 传入的函数如果是柯里化后的，则也柯里化返回
  if (originFn[_CURRY_]) {
    newFn = curry(newFn, originFn.length)
  }

  return newFn
}

export default curry1(addIndex)
