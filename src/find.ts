import { _curry2 } from './internal/_curry'
import _find from './internal/_find'
import _xfind from './internal/transducer/find'
import _isTransformer from './internal/_isTransformer'
import _isSequence from './internal/_isSequence'

function find(predicate, list) {
  // 若 list 为 Transformer，则用作 transducer
  if (_isTransformer(list)) return _xfind(predicate, list)

  if (!_isSequence(list)) list = []
  return _find(predicate, list)
}

export default _curry2(find)
