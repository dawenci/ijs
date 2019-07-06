import { curry2 } from './curry'

function filter<E>(predicate: (element: E, index: number) => any, list: ArrayLike<E>): Array<E> {
  const len = list.length || 0
  const results = []
  let index = -1
  while (++index < len) {
    if (predicate(list[index], index)) results.push(list[index])
  }
  return results
}

export default curry2(filter)
