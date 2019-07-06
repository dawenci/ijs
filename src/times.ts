import { curry2 } from './curry'

export default curry2((fn: (index: number) => any, n: number) => {
  const len = n
  let index = 0
  let result = new Array(len)
  while (index < len) {
    result[index] = fn(index)
    index += 1
  }
  return result
})
