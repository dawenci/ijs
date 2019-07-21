import { _curry2 } from './internal/_curry'
import _dropLast from './internal/_dropLast'
import _isTransformer from './internal/_isTransformer'
import _isSequence from './internal/_isSequence'

function _dropLastWhile(predicate, list) {
  const size = list.length
  let index = size
  while (index--) {
    if (!predicate(list[index])) break
  }
  return _dropLast(size - (index + 1), list)
}

function dropWhile(predicate, list) {
  if (!_isSequence(list)) list = []
  return _dropLastWhile(predicate, list)
}

export default _curry2(dropWhile)
