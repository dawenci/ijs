import { curry2 } from './curry'

export default curry2(<E>(item: E, list: ArrayLike<E>): number => {
  if (typeof list === 'string' || Array.isArray(list)) {
    return list.lastIndexOf(item)
  }
  if (list && list.length) {
    let index = list.length
    while(index--) {
      if (list[index] === item) return index
      index += 1
    }
  }
  return -1
})
