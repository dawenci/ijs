import { curry3 } from './curry'

function reduce(fn: (acc: any, item: any) => any, acc: any, list: any) {
  const len = list.length
  let index = 0
  while (index < len) {
    acc = fn(acc, list[index])
    index += 1
  }
  return acc
}

export default curry3(reduce)
