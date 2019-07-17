import { curry2 } from './curry'
import _eq from './internal/_sameValueZero'

function identical(a, b) {
  if (!_eq(a, b)) return false
  // +0, -0
  if (typeof a === 'number' && a === b) {
    return 1 / a === 1 / b
  }
  return true
}

export default curry2(identical)
