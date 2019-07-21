import { _curry2 } from "./internal/_curry";
import _take from './internal/_take'
import _xtake from './internal/transducer/take'
import _isTransformer from './internal/_isTransformer'

function take(n: number, list) {
  // 若 list 为 Transformer，则用作 transducer
  return _isTransformer(list)
    ? _xtake(n, list)
    : _take(n, list)
}

export default _curry2(take)
