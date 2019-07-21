import { _curry3 } from './internal/_curry'

function when <T, R>(predicate: (x: T) => boolean, then: (x: T) => any, x: T): R | T {
  return predicate(x) ? then(x) : x
}

export default _curry3(when)
