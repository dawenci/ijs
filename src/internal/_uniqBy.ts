import _sameValue from "./_sameValue";
import _sameValueUniqCache from './_sameValueUniqCache'

export default function uniqBy(fn, array) {
  const result = []
  const size = array.length >>> 0

  const cache = new _sameValueUniqCache()
  for (let index = 0; index < size; index += 1) {
    const item = array[index]
    const value = fn(item)
    if (cache.has(value)) continue
    result.push(item)
    cache.add(value)
  }

  return result
}
