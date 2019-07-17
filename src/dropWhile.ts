import { curry2 } from './curry'
import _drop from './internal/_drop'
import _xdropWhile from './internal/transducer/dropWhile'
import _isTransformer from './internal/_isTransformer'

function _dropWhile(predicate, list) {
  const size = list.length
  let index = 0;
  for (; index < size; index += 1) {
    if (!predicate(list[index])) break;
  }
  return _drop(index, list)
}

function dropWhile(predicate, list) {
  return _isTransformer(list)
    ? _xdropWhile(predicate, list)
    : _dropWhile(predicate, list)
}

export default curry2(dropWhile)
