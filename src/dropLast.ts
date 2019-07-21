import { _curry2 } from './internal/_curry'
import _dropLast from './internal/_dropLast'
import _isSequence from './internal/_isSequence'

function dropLast(n: number, list: string): string
function dropLast<E>(n: number, list: ArrayLike<E>): Array<E>
function dropLast(n: number, list) {
  if (!_isSequence(list)) list = []
  
  return _dropLast(n, list)
}

export default _curry2(dropLast)
