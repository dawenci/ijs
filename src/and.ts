import { curry2 } from './curry'

function and<T, U>(a: T, b: U) {
  if (!a) return a
  return b
}

export default curry2(and)
