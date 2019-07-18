import { curry3 } from "./curry";
import _unionBy from './internal/_unionBy'
import _identity from './internal/_identity'

/**
 * 顺序：先排列 array1 的结果，再排列 array2 的结果
 */

export default curry3(_unionBy)(_identity)
