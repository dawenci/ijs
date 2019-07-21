import { _curry2 } from './internal/_curry'
import _forEach from './internal/_forEach'
import _isSequence from './internal/_isSequence'

function forEach<E>(iteratee: (element: E | string) => any, list: ArrayLike<E> | string) {
  if (!_isSequence(list)) list = []
  return _forEach(iteratee, list)
}

export default _curry2(forEach)
