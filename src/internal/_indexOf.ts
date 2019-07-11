const _indexOf = Array.prototype.indexOf

function indexOf(from: number, item: string, list: string): number
function indexOf<E>(from: number, item: E, list: ArrayLike<E>): number
function indexOf(from, obj, list) {
  if (!list || !list.length) return -1
  from = from || 0

  // NaN
  if (obj !== obj) {
    const size = list.length
    for (let index = 0; index < size; index += 1) {
      const item = list[index]
      if (item !== item) return index
    }
    return -1
  }

  // String | Array
  if (typeof list === 'string' || Array.isArray(list)) {
    return list.indexOf(obj, from)
  }

  // ArrayLike
  return _indexOf.call(list, obj, from)
}

export default indexOf
