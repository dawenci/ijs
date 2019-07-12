import { curry2 } from './curry'
import _uniqBy from './internal/_uniqBy'

/**
 * 取两个数组交集（结果 uniq）
 * 使用 SameValueZero 比较元素
 * 
 * @param {Array} array1
 * @param {Array} array2
 */
function intersection(array1, array2) {
  let longList
  let shortList
  if (array1.length > array2.length) {
    longList = array1
    shortList = array2
  }
  else {
    longList = array2
    shortList = array1
  }

  const stringCache = {}
  const otherCache = {}
  const listCache = []

  // 遍历一次短列表，将值分成三种（字符串、其他原始类型、对象）分别缓存
  let len = shortList.length
  while (len--) {
    const value = shortList[len]
    const type = typeof value
    if (type === 'string') {
      stringCache[value] = 1
    } else if (type === 'number'|| value == null || type === 'symbol') {
      otherCache[value] = 1
    } else {
      // 不重复插入
      if (listCache.indexOf(value) === -1) {
        listCache.push(value)
      }
    }
  }

  // 遍历长列表，逐个元素与三种缓存列表比较
  const result = []
  const size = longList.length
  for (let index = 0; index < size; index += 1) {
    const value = longList[index]
    const type = typeof value
    // 缓存命中一次后，就除名，可以避免重复插入
    if (type === 'string' && stringCache[value]) {
      stringCache[value] = 0
      result.push(value)
    }
    // 缓存命中一次后，就除名，可以避免重复插入
    if (otherCache[value] && (type === 'number' || value == null || type === 'symbol')) {
      otherCache[value] = 0
      result.push(value)
    }
    else {
      const index = listCache.indexOf(value)
      if (index !== -1) {
        // 利用 indexOf(NaN) 永远为 -1 特性，从缓存除名，避免重复插入
        listCache[index] = NaN
        result.push(value)
      }
    }
  }

  return result
}

export default curry2(intersection)
