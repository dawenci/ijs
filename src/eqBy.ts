import { curry3 } from './curry'
import _sameValueZero from './internal/_sameValueZero'

function eqBy(fn: (a: any) => any, a: any, b: any): boolean {
  return _sameValueZero(fn(a), fn(b))
}

export default curry3(eqBy)
