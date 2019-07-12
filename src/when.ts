import { curry3 } from './curry'

function when <T, R>(predicate: (x: T) => boolean, then: (x: T) => any, x: T): R | T {
  return predicate(x) ? then(x) : x
}
export default curry3(when)
