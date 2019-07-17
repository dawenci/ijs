import { curry2 } from './curry'
import _findIndex from './internal/_findIndex'
import _xfindIndex from './internal/transducer/findIndex'
import _isTransformer from './internal/_isTransformer'

function findIndex(predicate, list) {
  // 若 list 为 Transformer，则用作 transducer
  return _isTransformer(list)
    ? _xfindIndex(predicate, list)
    : _findIndex(predicate, list)
}

export default curry2(findIndex)
