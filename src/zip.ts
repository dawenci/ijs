import { _curry2 } from './internal/_curry'
import _isSequence from './internal/_isSequence'

function zip(list1, list2) {
  if (!_isSequence(list1)) list1 = []
  if (!_isSequence(list2)) list2 = []

  const len = Math.min(list1.length, list2.length)
  const zipped = Array(len)
  for (let index = 0; index < len; index += 1) {
    zipped[index] = [list1[index], list2[index]]
  }
  return zipped
}

export default _curry2(zip)
