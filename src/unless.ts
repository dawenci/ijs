import { _curry3 } from './internal/_curry'

function unless <T, R>(predicate: (x: T) => boolean, whenFalse: (x: T) => any, x: T): R | T {
  return predicate(x) ? x : whenFalse(x)
}
export default _curry3(unless)
