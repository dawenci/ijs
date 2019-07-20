import { curry2 } from './curry'

function zip(list1, list2) {
  if (!list1 || !list1.length) list1 = []
  if (!list2 || !list2.length) list2 = []
  const len = Math.min(list1.length, list2.length)
  const zipped = Array(len)
  for (let index = 0; index < len; index += 1) {
    zipped[index] = [list1[index], list2[index]]
  }
  return zipped
}

export default curry2(zip)
