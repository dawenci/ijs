const slice = Array.prototype.slice
export default function _dropLast(n: number, list) {
  const size = list.length
  n = n < 0 ? size : n > size ? 0 : size - n
  if (typeof list === 'string') {
    return slice.call(list, 0, n).join('')
  }
  return slice.call(list, 0, n)
}
