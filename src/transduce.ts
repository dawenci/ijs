// import curry from './curry'

// type Reducer = {
//   (accumulator, current): any
// }

// type Tarnsformer = {
//   (r: Wrap): Reducer
// }

// const INIT = '@@transducer/init'
// const RESULT = '@@transducer/result'
// const STEP = '@@transducer/step'
// const REDUCED = '@@transducer/reduced'
// const VALUE = '@@transducer/value'

// const ITER_SYMBOL = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator'

// class Wrap {
//   reducing: Reducer

//   constructor(reducer) {
//     this.reducing = reducer
//   }

//   [INIT]() {
//     throw new Error('init not implemented')
//   }

//   [RESULT](accumulator) {
//     return accumulator
//   }

//   [STEP](accumulator, currentValue) {
//     return this.reducing(accumulator, currentValue)
//   }
// }

// function wrap(reducing) {
//   return typeof reducing === 'function'
//     ? new Wrap(reducing)
//     : reducing
// }


// function transduce(
//   tarnsformer: Tarnsformer,
//   fn: Reducer,
//   seed: any,
//   iterable: Array<any>
// ) {
//   const transformedReducer = tarnsformer(wrap(fn))
//   return _reduce(transformedReducer, seed, iterable)
// }

// function _arrayReduce(tarnsformer, accumulator, iterable) {
//   const size = iterable.length
//   const stepFn = tarnsformer[STEP]

//   for (let index = 0; index < size; index += 1) {
//     const current = iterable[index]
//     accumulator = stepFn(accumulator, current)
//     if (accumulator && accumulator[REDUCED]) {
//       accumulator = accumulator[VALUE]
//       break
//     }
//   }

//   return tarnsformer[RESULT](accumulator)
// }

// function _iterableReduce(tarnsformer, accumulator, iterable) {
//   let step = iterable.next()
//   const stepFn = tarnsformer[STEP]

//   while (!step.done) {
//     accumulator = stepFn(accumulator, step.value)
//     if (accumulator && accumulator[REDUCED]) {
//       accumulator = accumulator[VALUE]
//       break
//     }
//     step = iterable.next()
//   }

//   return tarnsformer[RESULT](accumulator)
// }

// function _methodReduce(tarnsformer, accumulator, object, methodName) {
//   return tarnsformer[RESULT](
//     object[methodName](tarnsformer[STEP].bind(tarnsformer), accumulator)
//   )
// }

// // function _reduced(x) {
// //   return x && x[REDUCED] ? x : { [VALUE]: x, [REDUCED]: true }
// // }

// function _reduce(tarnsformer, accumulator, iterable) {
//   if (Array.isArray(iterable)) {
//     return _arrayReduce(tarnsformer, accumulator, iterable)
//   }

//   if (iterable[ITER_SYMBOL] != null) {
//     const iterator = iterable[ITER_SYMBOL]()
//     return _iterableReduce(tarnsformer, accumulator, iterator)
//   }

//   if (typeof iterable.next === 'function') {
//     const iterator = iterable
//     return _iterableReduce(tarnsformer, accumulator, iterator)
//   }

//   if (typeof iterable.reduce === 'function') {
//     return _methodReduce(tarnsformer, accumulator, iterable, 'reduce')
//   }

//   throw new TypeError('reduce: list must be array or iterable')
// }

// export default curry(transduce)
