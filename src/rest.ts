import { curry1 } from './curry'

const slice = Array.prototype.slice

function rest <E extends any>(list: ArrayLike<E> | string) {
  if (!list || !list.length) return []

  if (typeof list === 'string') {
    return list.slice(1)
  }

  return slice.call(list, 1)
}

export default curry1(rest)
