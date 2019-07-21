import { _curry1 } from "./internal/_curry"
import _isSequence from './internal/_isSequence'


function flatten(list: Array<any>): Array<any> {
  if (!_isSequence(list)) list = []

  const result = []
  const size = list.length
  for (let index = 0; index < size; index += 1) {
    const item = list[index]
    if (!Array.isArray(item)) result.push(item)
    else result.push.apply(result, item)
  }
  return result
}

export default _curry1(flatten)
