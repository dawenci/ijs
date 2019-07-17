import { curry2 } from './curry'
import _filter from './internal/_filter'
import _xfilter from './internal/transducer/filter'
import _isTransformer from './internal/_isTransformer'

function filter(predicate, list) {
  // 若 list 为 Transformer，则用作 transducer
  return _isTransformer(list)
    ? _xfilter(predicate, list)
    : _filter(predicate, list)
}


export default curry2(filter)
