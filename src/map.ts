import { _curry2 } from './internal/_curry'
import _map from './internal/_map'
import _xmap from './internal/transducer/map'
import _isTransformer from './internal/_isTransformer'
import _isSequence from './internal/_isSequence'

// TODO, 实现 map 协议
const MAP = 'TODO'

function map(fn, list) {
  // 若 list 为 Transformer，则用作 transducer
  if (_isTransformer(list)) {
    return _xmap(fn, list)
  }

  // if (list && typeof list[MAP] === 'function') {
  //   return list[MAP](fn)
  // }

  if (!_isSequence(list)) list = []
  return _map.apply(void 0, arguments)
}

export default _curry2(map)
