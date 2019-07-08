import { curry1 } from './curry'

function last <E>(list: ArrayLike<E>) {
  if (!list || !list.length) return undefined
  return list[list.length - 1]
}

export default curry1(last)
