import { curry3 } from './curry'

function when <T, R>(predicate: (x: T) => boolean, thenFn: (x: T) => any, x: T): R | T {
  return predicate(x) ? thenFn(x) : x
}
export default curry3(when)
