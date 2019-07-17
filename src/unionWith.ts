import { curry3 } from "./curry";
import _unionWith from './internal/_unionWith'

/**
 * 顺序：先排列 array1 的结果，再排列 array2 的结果
 */
function unionWith(isDuplicate, array1, array2) {
  return _unionWith(isDuplicate, array1, array2)
}

export default curry3(unionWith)
