import { curry2 } from './curry'

function _dropLast(n: number, list) {
  const size = list.length
  n = n < 0 ? size : n > size ? 0 : size - n
  if (typeof list === 'string') {
    return slice.call(list, 0, n).join('')
  }
  return slice.call(list, 0, n)
}

const slice = Array.prototype.slice
function dropLast(n: number, list: string): string
function dropLast<E>(n: number, list: ArrayLike<E>): Array<E>
function dropLast(n: number, list) {
  return _dropLast(n, list)
}

export default curry2(dropLast)
