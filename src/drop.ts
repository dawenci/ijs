import { curry2 } from './curry'

const slice = Array.prototype.slice
function drop(n: number, list: string): string
function drop<E>(n: number, list: ArrayLike<E>): Array<E>
function drop(n: number, list) {
  if (n < 0) n = 0
  n = n >>> 0
  if (typeof list === 'string') {
    return slice.call(list, n).join('')
  }
  return slice.call(list, n)
}

export default curry2(drop)
