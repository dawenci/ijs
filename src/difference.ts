import { curry2 } from "./curry";

function difference(array1, array2) {
  const result = []
  const resultCache = new Set()
  const array2Cache = new Set(array2)
  const len = array1.length
  for (let index = 0; index < len; index += 1) {
    const item = array1[index]
    if (resultCache.has(item)) continue
    if (array2Cache.has(item)) continue
    result.push(item)
    resultCache.add(item)
  }
  return result
}

export default curry2(difference)
