import { curry2 } from './curry'
import _dropLast from './internal/_dropLast'

function dropLast(n: number, list: string): string
function dropLast<E>(n: number, list: ArrayLike<E>): Array<E>
function dropLast(n: number, list) {
  return _dropLast(n, list)
}

export default curry2(dropLast)
