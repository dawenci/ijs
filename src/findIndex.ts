import { curry2 } from './curry'
import _findIndex from './internal/_findIndex'
import _xfindIndex from './internal/transducer/findIndex'
import _isTransformer from './internal/_isTransformer'

function findIndex(predicate, list) {
  // 如果最终 fn 应用于 reducer（已 wrap 为 Transformer） 上，
  // 则使用 filter transducer
  if (_isTransformer(list)) {
    return _xfindIndex(predicate, list)
  }
  
  // 普通列表 map
  return _findIndex(predicate, list)
}

export default curry2(findIndex)
