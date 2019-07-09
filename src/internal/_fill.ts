export default function (array, value, start?, end?) {
  if (array == null) {
    array = []
  } else {
    array = Object(array)
  }

  const len = array.length >>> 0
  const relativeStart = start >> 0
  let index = relativeStart < 0 ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len)
  const relativeEnd = end === undefined ? len : end >> 0
  const final = relativeEnd < 0 ? Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len)
  while (index < final) {
    array[index] = value
    index += 1
  }
  return array
}
