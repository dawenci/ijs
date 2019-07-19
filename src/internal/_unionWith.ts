import _some from './_some'

export default function unionWith(compare, array1, array2) {
  array1 = [...new Set(array1)]
  array2 = [...new Set(array2)]
  const result = []

  const len1 = array1.length
  for (let index = 0; index < len1; index += 1) {
    const item = array1[index]
    const isDuplicate = _some(obj => compare(item, obj), result)
    if (isDuplicate) {
      continue
    }
    result.push(item)
  }

  const len2 = array2.length  
  for (let index = 0; index < len2; index += 1) {
    const item = array2[index]
    const isDuplicate = _some(obj => compare(item, obj), result)
    if (isDuplicate) {
      continue
    }
    result.push(item)
  }
  return result
}
