import { _curry2 } from './internal/_curry'

function and<T, U>(a: T, b: U) {
  return a && b
}

export default _curry2(and)
