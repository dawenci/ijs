export default function uniqBy(fn, array) {
  const result = []
  const size = array.length >>> 0

  // 空间换时间加速
  // 1. 字符串 fn 结果缓存
  const stringCache = {}
  // 2. 字符串外其他原始类型的 fn 结果缓存
  const otherCache = {}
  // 3. 非原始类型的 fn 结果缓存
  const valueCache = []

  for (let index = 0; index < size; index += 1) {
    const item = array[index]
    const value = fn(item)

    const type = typeof value

    if (type === 'string') {
      if (stringCache[value]) continue

      result.push(item)
      stringCache[value] = 1
      continue
    }

    // number（含 +-Infinity, NaN）、null（含 undefined）同个缓存、symbol
    if (type === 'number' || value == null || type === 'symbol') {
      if (otherCache[value]) continue

      result.push(item)
      otherCache[value] = 1
      continue
    }

    // 非原始类型，从数组缓存检查
    if (valueCache.indexOf(value) === -1) {
      valueCache.push(value)
      result.push(item)
    }
  }

  return result
}
