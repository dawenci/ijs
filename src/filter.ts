import { _curry2 } from './internal/_curry'
import _filter from './internal/_filter'
import _xfilter from './internal/transducer/filter'
import _isTransformer from './internal/_isTransformer'
import _isSequence from './internal/_isSequence'

function filter(predicate, list) {
  // 若 list 为 Transformer，则用作 transducer
  if (_isTransformer(list)) return _xfilter(predicate, list)

  if (!_isSequence(list)) list = []
  return _filter(predicate, list)
}


export default _curry2(filter)
