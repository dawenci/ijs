import { _curry3 } from "./internal/_curry";
import _unionWith from './internal/_unionWith'

/**
 * 顺序：先排列 array1 的结果，再排列 array2 的结果
 * @param {Function} predicate 返回布尔值，代表是否重复
 */
function unionWith(predicate, coll1, coll2) {
  return _unionWith(predicate, coll1, coll2)
}

export default _curry3(unionWith)
