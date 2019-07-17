export const INIT = '@@transducer/init'
export const RESULT = '@@transducer/result'
export const STEP = '@@transducer/step'
export const REDUCED = '@@transducer/reduced'
export const VALUE = '@@transducer/value'
export const ITERATOR = '@@iterator'

// reducer，即每一步执行 reducing 的函数
export interface Reducer {
  (accumulator, currentValue): any
}

export interface Reduced<T> {
  [VALUE]: T
  [REDUCED]: boolean
}

export interface Transformer {
  // 返回初始化值
  [INIT]: () => any
  // 返回最终结果
  [RESULT]: (accumulator: any) => any
  // reducer
  [STEP]: (accumulator: any, currentValue: any) => any
}

export interface Transducer {
  (tarnsformer: Transformer): Transformer
}

export interface _Iterator {
  [ITERATOR]: (value: any) => any
}

export const ITER_SYMBOL = typeof Symbol !== 'undefined' ? Symbol.iterator : ITERATOR
