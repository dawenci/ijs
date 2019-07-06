import { curry3 } from './curry'

export default curry3((fn: (acc, item) => any, acc, list: any) => {
  const len = list.length
  let index = 0
  while (index < len) {
    acc = fn(acc, list[index])
    index += 1
  }
  return acc
})
