import { curry2 } from './curry'

function every<E>(predicate: (element: E, index: number) => any, list: ArrayLike<E>): boolean {
  const len = list.length
  let index = 0
  while (index < len) {
    if (!predicate(list[index], index)) return false
    index += 1
  }
  return true
}

export default curry2(every)
