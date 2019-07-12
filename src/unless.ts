import { curry3 } from './curry'

function unless <T, R>(predicate: (x: T) => boolean, whenFalse: (x: T) => any, x: T): R | T {
  return predicate(x) ? x : whenFalse(x)
}
export default curry3(unless)
