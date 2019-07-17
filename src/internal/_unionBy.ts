export default function unionBy(fn, array1, array2) {
  const cache = new Set()
  const result = []

  const len1 = array1.length
  const len2 = array2.length

  for (let index = 0; index < len1; index += 1) {
    const item = array1[index]
    const mapped = fn(item)

    if (!cache.has(mapped)) {
      cache.add(mapped)
      result.push(item)
    }
  }
  for (let index = 0; index < len2; index += 1) {
    const item = array2[index]
    const mapped = fn(item)
    
    if (!cache.has(mapped)) {
      cache.add(mapped)
      result.push(item)
    }
  }
  return result
}
