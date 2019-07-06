import { curry2 } from './curry'

export default curry2((item: any, list: ArrayLike<any>): number => {
  if (typeof list === 'string' || Array.isArray(list)) {
    return list.indexOf(item)
  }
  if (list && list.length) {
    const len = list.length
    let index = 0
    while(index < len) {
      if (list[index] === item) return index
      index += 1
    }
  }
  return -1
})
