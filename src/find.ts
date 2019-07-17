import { curry2 } from './curry'
import _find from './internal/_find'
import _xfind from './internal/transducer/find'
import _isTransformer from './internal/_isTransformer'

function find(predicate, list) {
  // 如果最终 fn 应用于 reducer（已 wrap 为 Transformer） 上，
  // 则使用 filter transducer
  if (_isTransformer(list)) {
    return _xfind(predicate, list);
  }
  
  // 普通列表 map
  return _find(predicate, list)
}

export default curry2(find)
