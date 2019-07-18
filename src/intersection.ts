import { curry2 } from './curry'
import _sameValueUniqCache from './internal/_SetCache'

/**
 * 取两个数组交集（结果 uniq）
 * 使用 SameValue 比较元素
 * 
 * @param {Array} array1
 * @param {Array} array2
 */
function intersection(array1, array2) {
  // 遍历一次列表2，uniq 缓存值
  const cache = new _sameValueUniqCache(array2)
  // 遍历列表 1，逐个元素与三种缓存列表比较
  const result = []
  const size = array1.length
  for (let index = 0; index < size; index += 1) {
    const value = array1[index]
    // 缓存命中一次后，就除名，可以避免重复插入
    if (cache.has(value)) {
      result.push(value)
      cache.remove(value)
    }
  }
  return result
}

export default curry2(intersection)
