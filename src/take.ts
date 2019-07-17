import { curry2 } from "./curry";
import _take from './internal/_take'
import _xtake from './internal/transducer/take'
import _isTransformer from './internal/_isTransformer'

function take(n: number, list) {
  // 如果最终 fn 应用于 reducer（已 wrap 为 Transformer） 上，
  // 则使用 filter transducer
  if (_isTransformer(list)) {
    return _xtake(n, list);
  }
  
  // 普通列表 map
  return _take(n, list)
}

export default curry2(take)
