import { curry2 } from './curry'
import _filter from './internal/_filter'
import _xfilter from './internal/transducer/filter'
import _isTransformer from './internal/_isTransformer'

function filter(predicate, list) {
  // 如果最终 fn 应用于 reducer（已 wrap 为 Transformer） 上，
  // 则使用 filter transducer
  if (_isTransformer(list)) {
    return _xfilter(predicate, list);
  }
  
  // 普通列表 map
  return _filter(predicate, list)
}


export default curry2(filter)
