import { curry2 } from './curry'
import _xdrop from './internal/transducer/drop'
import _isTransformer from './internal/_isTransformer'

function _drop(n: number, list) {
  if (n < 0) n = 0
  n = n >>> 0
  if (typeof list === 'string') {
    return slice.call(list, n).join('')
  }
  return slice.call(list, n)
}

const slice = Array.prototype.slice
function drop(n: number, list: string): string
function drop<E>(n: number, list: ArrayLike<E>): Array<E>
function drop(n: number, list) {
  return _isTransformer(list)
    ? _xdrop(n, list)
    : _drop(n, list)
}

export default curry2(drop)
