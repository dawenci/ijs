import { curry2 } from './curry'

export default curry2((predicate: (e: any, i: number) => any, list: ArrayLike<any>) => {
  const len = list.length || 0
  let index = -1
  while (++index < len) {
    if (predicate(list[index], index)) return list[index]
  }
})
