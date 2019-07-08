import { curry1 } from './curry'

function first<E>(list: ArrayLike<E>): E {
  if (!list || !list.length) return undefined
  return list[0]
}

export default curry1(first)
