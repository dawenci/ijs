import { curry2 } from "./curry";

function difference(array1, array2) {
  const result = []
  const set1 = new Set()
  const set2 = new Set(array2)
  const len = array1.length
  for (let index = 0; index < len; index += 1) {
    const item = array1[index]
    if (set2.has(item)) continue
    if (set1.has(item)) continue
    result.push(item)
    set1.add(item)
  }
  return result
}

export default curry2(difference)
