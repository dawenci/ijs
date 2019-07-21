import { _curry3 } from './internal/_curry'
import _intersectionBy from './internal/_intersectionBy'

/**
 * 取两个数组交集（结果 uniq）
 * 使用 SameValue 比较元素
 * 
 * @param {Array} array1
 * @param {Array} array2
 */
export default _curry3(_intersectionBy)
