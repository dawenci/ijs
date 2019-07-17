import { curry2 } from "./curry";
import _unionBy from './internal/_unionBy'

/**
 * 顺序：先排列 array1 的结果，再排列 array2 的结果
 */
function union(array1, array2) {
  return _unionBy(i => i, array1, array2)
}

export default curry2(union)
