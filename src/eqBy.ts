import { curry3 } from './curry'
import _eq from './internal/_sameValueZero'

function eqBy(fn: (a: any) => any, a: any, b: any): boolean {
  return _eq(fn(a), fn(b))
}

export default curry3(eqBy)
