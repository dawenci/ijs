import { _curry2 } from './internal/_curry'
import _every from './internal/_every'
import _xevery from './internal/transducer/every'
import _isTransformer from './internal/_isTransformer'
import _isSequence from './internal/_isSequence'

function all(predicate: (e: any) => boolean, list) {
  // 如果最终 fn 应用于 reducer（已 wrap 为 Transformer） 上，
  // 则使用 transducer
  if (_isTransformer(list)) {
    return _xevery(predicate, list);
  }
  
  // 普通列表 map
  if (!_isSequence(list)) list = []
  return _every(predicate, list)
}

export default _curry2(all)
