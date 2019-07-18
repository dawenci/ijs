import { curry2 } from './curry'

function and<T, U>(a: T, b: U) {
  return a && b
}

export default curry2(and)
