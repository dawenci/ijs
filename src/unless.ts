import { curry3 } from './curry'

function unless <T, R>(predicate: (x: T) => boolean, falseFn: (x: T) => any, x: T): R | T {
  return predicate(x) ? x : falseFn(x)
}
export default curry3(unless)
