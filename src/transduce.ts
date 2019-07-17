import curry from './curry'
import _isArrayLike from './internal/_isArrayLike'
import {
  INIT,
  RESULT,
  STEP,
  REDUCED,
  VALUE,
  ITER_SYMBOL,

  Reducer,
  Transducer,
  Transformer,
  _Iterator,
} from './transducer/protocol'


// 将普通 reducer 包装成 transformer
class XfWrap implements Transformer {
  constructor(private reducer: Reducer) {}
  // 初始化值在调用 transduce 时会传入，此处不用
  [INIT]() {
    throw new Error('init not implemented')
  }
  [RESULT](accumulator) {
    return accumulator
  }
  [STEP](accumulator, currentValue) {
    return this.reducer(accumulator, currentValue)
  }
}

// 包装 reducing function 为 Transformer
function wrap(reducing: Reducer | Transformer): Transformer {
  return typeof reducing === 'function'
    ? new XfWrap(reducing)
    : reducing
}

function _arrayReduce(tarnsformer, initialValue, iterable) {
  const size = iterable.length
  const stepFn = tarnsformer[STEP]
  let accumulator = initialValue
  for (let index = 0; index < size; index += 1) {
    const current = iterable[index]
    accumulator = stepFn(accumulator, current)
    if (accumulator && accumulator[REDUCED]) {
      accumulator = accumulator[VALUE]
      break
    }
  }

  return tarnsformer[RESULT](accumulator)
}

function _iterableReduce(tarnsformer, initialValue, iterable) {
  let step = iterable.next()
  const stepFn = tarnsformer[STEP]
  let accumulator = initialValue
  while (!step.done) {
    accumulator = stepFn(accumulator, step.value)
    if (accumulator && accumulator[REDUCED]) {
      accumulator = accumulator[VALUE]
      break
    }
    step = iterable.next()
  }

  return tarnsformer[RESULT](accumulator)
}

function _methodReduce(tarnsformer, initialValue, object, methodName) {
  let accumulator = initialValue
  return tarnsformer[RESULT](
    object[methodName](tarnsformer[STEP].bind(tarnsformer), accumulator)
  )
}

function _reduce(
  tarnsformer: Transformer,
  initialValue: any,
  iterable: Array<any> | Iterable<any> | Iterator<any> | _Iterator
) {
  if (_isArrayLike(iterable)) {
    return _arrayReduce(tarnsformer, initialValue, iterable)
  }

  if (iterable[ITER_SYMBOL] != null) {
    const iterator = iterable[ITER_SYMBOL]()
    return _iterableReduce(tarnsformer, initialValue, iterator)
  }

  // if (typeof iterable.next === 'function') {
  //   const iterator = iterable
  //   return _iterableReduce(tarnsformer, initialValue, iterator)
  // }

  // if (typeof iterable.reduce === 'function') {
  //   return _methodReduce(tarnsformer, initialValue, iterable, 'reduce')
  // }

  throw new TypeError('reduce: list must be array or iterable')
}

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
