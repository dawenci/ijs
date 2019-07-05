import { curry2 } from './curry'

export default curry2((predicate: (e: any, i: number) => any, list: ArrayLike<any>) => {
  const len = list.length
  let index = 0
  while (index < len) {
    if (predicate(list[index], index)) return true
    index += 1
  }
  return false
})
