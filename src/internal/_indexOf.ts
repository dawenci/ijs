const _indexOf = Array.prototype.indexOf

function indexOf(from: number, obj: string, list: string): number
function indexOf<E>(from: number, obj: E, list: ArrayLike<E>): number
function indexOf(from, obj, list) {
  if (!list) return -1
  const size = list.length
  if (!size) return -1

  if (from == null) from = 0

  if (typeof list === 'string') {
    return list.indexOf(obj, from)
  }
  
  // NaN
  if (obj !== obj) {
    const size = list.length
    let index = from
    if (index < 0) index = size + index
    if (index >= size) return -1
    // 小于零则修改成 0，减少循环次数
    if (index < 0) index = 0
    for (; index < size; index += 1) {
      const item = list[index]
      if (item !== item) return index
    }
    return -1
  }

  // String | Array
  if (Array.isArray(list)) {
    return list.indexOf(obj, from)
  }

  // ArrayLike
  return _indexOf.call(list, obj, from)
}

export default indexOf
