import _sameValue from "./_sameValue";
import _sameValueUniqCache from './_SetCache'

export default function uniqBy(fn: (e: any) => any, list) {
  if (!list || !list.length) list = []
  const result = []
  const size = list.length >>> 0

  const cache = new _sameValueUniqCache()
  for (let index = 0; index < size; index += 1) {
    const item = list[index]
    const value = fn(item)
    if (cache.has(value)) continue
    result.push(item)
    cache.add(value)
  }

  return result
}
