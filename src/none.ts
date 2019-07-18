import { curry2 } from './curry'

export default curry2(<E>(predicate: (e: E, i: number) => any, list: ArrayLike<E>): boolean => {
  if (!list || !list.length) return true
  const len = list.length
  for (let index = 0; index < len; index += 1) {
    if (predicate(list[index], index)) return false
  }
  return true
})
