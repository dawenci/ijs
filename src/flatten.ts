import { curry1 } from "./curry";

function flatten(array: Array<any>): Array<any> {
  const result = []
  const size = array.length
  for (let index = 0; index < size; index += 1) {
    const item = array[index]
    if (!Array.isArray(item)) result.push(item)
    else result.push.apply(result, item)
  }
  return result
}

export default curry1(flatten)
