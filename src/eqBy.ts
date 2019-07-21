import { _curry3 } from './internal/_curry'
import _sameValueZero from './internal/_sameValueZero'

function eqBy(fn: (a: any) => any, a: any, b: any): boolean {
  return _sameValueZero(fn(a), fn(b))
}

export default _curry3(eqBy)
