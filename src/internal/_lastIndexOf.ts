const native = Array.prototype.lastIndexOf
function lastIndexOf(from: number, item: string, list: string): number
function lastIndexOf<E>(from: number, item: E, list: ArrayLike<E>): number
function lastIndexOf(from, item, list) {
  if (!list || !list.length) return -1
  from = from || list.length - 1

  if (typeof list === 'string') {
    return list.lastIndexOf(item, from)
  }

  return native.call(list, item, from)
}

export default lastIndexOf
