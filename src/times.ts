import { curry2 } from './curry'

export default curry2((fn: (index: number) => any, n: number): Array<any> => {
  const len = n
  const result = new Array(len)
  for (let index = 0; index < len; index += 1) {
    result[index] = fn(index)
  }
  return result
})
