import { _curry2 } from "./internal/_curry";
import _map from './internal/_map'
import _sameValueUniqCache from './internal/_SetCache'

function differenceBy(fn: (e: any) => any, array1, array2) {
  if (!array1 || !array1.length) array1 = []
  if (!array2 || !array2.length) array2 = []

  const result = []
  const resultCache = new _sameValueUniqCache()
  const array2Cache = new _sameValueUniqCache(_map(fn, array2))

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

export default _curry2(differenceBy)
