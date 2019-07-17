import { curry2 } from './curry'
import _drop from './internal/_drop'
import _xdropWhile from './internal/transducer/dropWhile'
import _isTransformer from './internal/_isTransformer'

function _dropWhile(fn, list) {
  const size = list.length
  let index = 0;
  for (; index < size; index += 1) {
    if (!fn(list[index])) break;
  }
  return _drop(index, list)
}

function dropWhile(fn, list) {
  return _isTransformer(list)
    ? _xdropWhile(fn, list)
    : _dropWhile(fn, list)
}

export default curry2(dropWhile)
