import { curry1 } from './curry'

function first<E>(list: ArrayLike<E>): E {
  return list[0]
}

export default curry1(first)
