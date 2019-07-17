import { curry2 } from './curry'
import _dropLast from './internal/_dropLast'
import _isTransformer from './internal/_isTransformer'

function _dropLastWhile(predicate, list) {
  const size = list.length
  let index = size
  while (index--) {
    if (!predicate(list[index])) break
  }
  return _dropLast(size - (index + 1), list)
}

function dropWhile(predicate, list) {
  return _dropLastWhile(predicate, list)
}

export default curry2(dropWhile)
