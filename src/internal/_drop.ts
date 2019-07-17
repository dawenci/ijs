const slice = Array.prototype.slice
export default function _drop(n: number, list) {
  if (n < 0) n = 0
  n = n >>> 0
  if (typeof list === 'string') {
    return slice.call(list, n).join('')
  }
  return slice.call(list, n)
}
