import { curry2 } from './curry'

function tap(fn, value) {
  if (typeof fn === 'function') fn(value)
  return value
}

export default curry2(tap)
