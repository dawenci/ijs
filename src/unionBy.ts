import { _curry3 } from "./internal/_curry";
import _unionBy from './internal/_unionBy'

/**
 * 顺序：先排列 array1 的结果，再排列 array2 的结果
 */

export default _curry3(_unionBy)
