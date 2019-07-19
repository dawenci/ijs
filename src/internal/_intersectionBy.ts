import _SetCache from './_SetCache'
import _map from './_map'

export default function intersectionBy(fn, array1, array2) {
  const result = []

  // 遍历一次列表2，uniq 缓存值
  const cache = new _SetCache(_map(fn, array2))

  // 遍历列表 1，逐个元素与缓存列表比较
  const size = array1.length
  for (let index = 0; index < size; index += 1) {
    const item = array1[index]
    const mapped = fn(item)
    // 缓存命中一次后，就除名，可以避免重复插入
    if (cache.has(mapped)) {
      result.push(item)
      cache.remove(mapped)
    }
  }
  return result
}
