import { curry2 } from './curry'
import _map from './internal/_map'
import _xmap from './internal/transducer/map'
import _isTransformer from './internal/_isTransformer'

function map(fn, list) {
  // 若 list 为 Transformer，则用作 transducer
  return _isTransformer(list)
    ? _xmap(fn, list)
    : _map.apply(void 0, arguments)
}

export default curry2(map)
