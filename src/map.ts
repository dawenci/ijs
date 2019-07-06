import { curry2 } from './curry'

export default curry2(<E>(iteratee: (e: E, i: number) => any, list: ArrayLike<E>): Array<E> => {
  const len = list.length || 0
  const results = Array(len)
  let index = -1
  while (++index < len) {
    results[index] = iteratee(list[index], index)
  }
  return results
})
