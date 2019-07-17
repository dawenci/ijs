import { curry2 } from './curry'
import _map from './internal/_map'
import _xmap from './internal/transducer/map'
import _isTransformer from './internal/_isTransformer'

function map(fn, list) {
  // 如果最终 fn 应用于 reducer（已 wrap 为 Transformer） 上，
  // 则使用 map transducer
  if (_isTransformer(list)) {
    return _xmap(fn, list);
  }
  
  // 普通列表 map
  return _map.apply(void 0, arguments)
}

export default curry2(map)
