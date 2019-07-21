import { _curry2 } from './internal/_curry'
import _findIndex from './internal/_findIndex'
import _xfindIndex from './internal/transducer/findIndex'
import _isTransformer from './internal/_isTransformer'
import _isSequence from './internal/_isSequence'

function findIndex(predicate, list) {
  // 若 list 为 Transformer，则用作 transducer
  if (_isTransformer(list)) return _xfindIndex(predicate, list)

  if (!_isSequence(list)) list = []
  return _findIndex(predicate, list)
}

export default _curry2(findIndex)
