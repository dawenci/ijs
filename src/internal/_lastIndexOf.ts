const _lastIndexOf = Array.prototype.lastIndexOf

function lastIndexOf(from: number, item: string, list: string): number
function lastIndexOf<E>(from: number, item: E, list: ArrayLike<E>): number
function lastIndexOf(from, obj, list) {
  if (!list || !list.length) return -1
  from = from || list.length - 1

  // NaN
  if (obj !== obj) {
    let start = from
    while (start--) {
      const item = list[start]
      if (item !== item) return start
    }
    return -1
  }  

  if (typeof list === 'string' || Array.isArray(list)) {
    return list.lastIndexOf(obj, from)
  }

  return _lastIndexOf.call(list, obj, from)
}

export default lastIndexOf
