import { curry2 } from './curry'
import _find from './internal/_find'
import _xfind from './internal/transducer/find'
import _isTransformer from './internal/_isTransformer'

function find(predicate, list) {
  // 若 list 为 Transformer，则用作 transducer
  return _isTransformer(list)
    ? _xfind(predicate, list)
    : _find(predicate, list)
}

export default curry2(find)
