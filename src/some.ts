import { curry2 } from './curry'
import _some from './internal/_some'
import _xsome from './internal/transducer/some'
import _isTransformer from './internal/_isTransformer'

function any(predicate: (e: any) => boolean, list) {
  // 如果最终 fn 应用于 reducer（已 wrap 为 Transformer） 上，
  // 则使用 transducer
  if (_isTransformer(list)) {
    return _xsome(predicate, list);
  }
  
  // 普通列表 map
  return _some(predicate, list)
}

export default curry2(any)
