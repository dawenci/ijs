import { _curry2 } from './internal/_curry'
import _drop from './internal/_drop'
import _xdropWhile from './internal/transducer/dropWhile'
import _isTransformer from './internal/_isTransformer'
import _isSequence from './internal/_isSequence'

function _dropWhile(predicate, list) {
  const size = list.length
  let index = 0;
  for (; index < size; index += 1) {
    if (!predicate(list[index])) break;
  }
  return _drop(index, list)
}

function dropWhile(predicate, list) {
  if (_isTransformer(list)) return _xdropWhile(predicate, list)

  if (!_isSequence(list)) list = []
  return _dropWhile(predicate, list)
}

export default _curry2(dropWhile)
