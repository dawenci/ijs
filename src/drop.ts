import { _curry2 } from './internal/_curry'
import _xdrop from './internal/transducer/drop'
import _isTransformer from './internal/_isTransformer'
import _drop from './internal/_drop'
import _isSequence from './internal/_isSequence'

function drop(n: number, list: string): string
function drop<E>(n: number, list: ArrayLike<E>): Array<E>
function drop(n: number, list) {
  if (_isTransformer(list)) return _xdrop(n, list)

  if (!_isSequence(list)) list = []
  return _drop(n, list)
}

export default _curry2(drop)
