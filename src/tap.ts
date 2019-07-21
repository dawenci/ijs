import { _curry2 } from './internal/_curry'
import _xtap from './internal/transducer/tap'
import _isTransformer from './internal/_isTransformer'

function tap(fn, value) {
  // 若 value 为 Transformer，则用作 transducer
  if (_isTransformer(value)) return _xtap(fn, value)
  fn(value)
  return value
}

export default _curry2(tap)
