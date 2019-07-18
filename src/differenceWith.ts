import { curry2 } from "./curry";
import _map from './internal/_map'
import _uniqWith from './internal/_uniqWith'
import _sameValueUniqCache from './internal/_SetCache'

function differenceWith(compare, array1, array2) {
  const result = []
  const resultCache = new _sameValueUniqCache()

  const len = array1.length
  const len2 = array2.length

  for (let index = 0; index < len; index += 1) {
    const item = array1[index]
    if (resultCache.has(item)) continue

    for (let index2 = 0; index2 < len2; index2 += 1) {
      const item2 = array2[index2]
      if (!compare(item, item2)) {
        result.push(item)
        resultCache.add(item)
      }
    }
  }

  return _uniqWith(compare, result)
}

export default curry2(differenceWith)
