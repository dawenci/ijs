import { curry2 } from './curry'

function find<E>(predicate: (element: E, index: number) => any, list: ArrayLike<E>): E {
  const len = list.length || 0
  let index = -1
  while (++index < len) {
    if (predicate(list[index], index)) return list[index]
  }
}

export default curry2(find)
