import { curry3 } from './curry'

function until <T, U>(predicate: (value: T | U) => boolean, update: (value: T | U) => U, initValue: T): T | U {
  let value: U | T = initValue
  while (predicate(value)) value = update(value)
  return value
}
export default curry3(until)
