import _isArrayLike from './_isArrayLike'
import {
  RESULT,
  STEP,
  REDUCED,
  VALUE,
  ITER_SYMBOL,

  Reducer,
  Transformer,
  _Iterator,
} from './transducer/protocol'
import wrap from './transducer/wrapReducer'


function _arrayReduce(tarnsformer, initialValue, iterable) {
  const size = iterable.length
  const stepFn = tarnsformer[STEP].bind(tarnsformer)
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
  const stepFn = tarnsformer[STEP].bind(tarnsformer)
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

export default function _reduce(
  tarnsformer: Reducer | Transformer,
  initialValue: any,
  iterable: Array<any> | ArrayLike<any> | Iterable<any> | Iterator<any> | _Iterator
) {
  if (typeof tarnsformer === 'function') {
    tarnsformer = wrap(tarnsformer)
  }

  if (_isArrayLike(iterable)) {
    return _arrayReduce(tarnsformer, initialValue, iterable)
  }

  if (iterable[ITER_SYMBOL] != null) {
    const iterator = iterable[ITER_SYMBOL]()
    return _iterableReduce(tarnsformer, initialValue, iterator)
  }

  if (typeof (iterable as any).next === 'function') {
    const iterator = iterable
    return _iterableReduce(tarnsformer, initialValue, iterator)
  }

  if (typeof (iterable as any).reduce === 'function') {
    return _methodReduce(tarnsformer, initialValue, iterable, 'reduce')
  }

  throw new TypeError('reduce: list must be array or iterable')
}
