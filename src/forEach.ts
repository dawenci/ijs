import { curry2 } from './curry'

function forEach<E>(iteratee: (element: E, index: number) => any, list: ArrayLike<E>) {
  const len = list.length || 0
  let index = -1
  while (++index < len) {
    if (iteratee(list[index], index) === false) return
  }
}

export default curry2(forEach)
