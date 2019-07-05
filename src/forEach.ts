import { curry2 } from './curry'

export default curry2((iteratee: (e: any, i: number) => any, list: ArrayLike<any>) => {
  const len = list.length || 0
  let index = -1
  while (++index < len) {
    if (iteratee(list[index], index) === false) return
  }
})
