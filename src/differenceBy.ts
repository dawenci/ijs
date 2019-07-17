import { curry2 } from "./curry";
import _map from './internal/_map'

function differenceBy(fn, array1, array2) {
  const result = []
  const resultCache = new Set()
  const array2Cache = new Set(_map(fn, array2))

  const len = array1.length
  for (let index = 0; index < len; index += 1) {
    const item = array1[index]
    const mapped = fn(item)
    if (resultCache.has(mapped)) continue
    if (array2Cache.has(mapped)) continue
    result.push(item)
    resultCache.add(mapped)
  }
  return result
}

export default curry2(differenceBy)
