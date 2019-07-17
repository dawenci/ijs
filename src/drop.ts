import { curry2 } from './curry'
import _xdrop from './internal/transducer/drop'
import _isTransformer from './internal/_isTransformer'
import _drop from './internal/_drop'

function drop(n: number, list: string): string
function drop<E>(n: number, list: ArrayLike<E>): Array<E>
function drop(n: number, list) {
  return _isTransformer(list)
    ? _xdrop(n, list)
    : _drop(n, list)
}

export default curry2(drop)
