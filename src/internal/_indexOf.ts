const native = Array.prototype.indexOf

function indexOf(from: number, item: string, list: string): number
function indexOf<E>(from: number, item: E, list: ArrayLike<E>): number
function indexOf(from, item, list) {
  if (!list || !list.length) return -1
  from = from || 0

  if (typeof list === 'string') {
    return list.indexOf(item as string, from)
  }

  return native.call(list, item, from)
}


export default indexOf
