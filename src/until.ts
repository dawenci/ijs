import { curry3 } from './curry'

function until <T, U>(predicate: (value: T | U) => boolean, loopFn: (value: T | U) => U, initValue: T): T | U {
  let value: U | T = initValue
  while (predicate(value)) value = loopFn(value)
  return value
}
export default curry3(until)
