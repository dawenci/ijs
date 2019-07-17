import curry from './curry'
import _isArrayLike from './internal/_isArrayLike'
import {
  Reducer,
  Transducer,
  _Iterator,
} from './internal/transducer/protocol'
import wrap from './internal/transducer/wrapReducer'
import _reduce from './internal/_reduce'

function transduce(
  transducer: Transducer,
  reducer: Reducer,
  initialValue: any,
  iterable: Array<any>
) {
  const transformer = wrap(reducer)
  return _reduce(transducer(transformer), initialValue, iterable)
}

export default curry(transduce)
