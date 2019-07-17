import { curry2 } from './curry'
import _all from './internal/_all'
import _xall from './internal/transducer/all'
import _isTransformer from './internal/_isTransformer'

function all(predicate, list) {
  // 如果最终 fn 应用于 reducer（已 wrap 为 Transformer） 上，
  // 则使用 transducer
  if (_isTransformer(list)) {
    return _xall(predicate, list);
  }
  
  // 普通列表 map
  return _all(predicate, list)
}

export default curry2(all)
