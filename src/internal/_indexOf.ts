// Array.prototype.indexOf, Array.prototype.lastIndexOf, 和 case-matching 中使用的
// 相等算法是 `===`，我们的实现采用 `SameValue` 算法
function _indexOf(from: number, obj: string, list: string): number
function _indexOf<E>(from: number, obj: E, list: ArrayLike<E>): number
function _indexOf(from, obj, list) {
  if (!list) return -1

  const size = list.length
  if (!size) return -1

  if (from == null) from = 0

  if (typeof list === 'string') {
    return list.indexOf(obj, from)
  }
  
  // NaN
  if (obj !== obj) {
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

  // +-0
  if (obj === 0) {
    let index = from
    if (index < 0) index = size + index
    if (index >= size) return -1
    // 小于零则修改成 0，减少循环次数
    if (index < 0) index = 0

    const infinity = 1 / obj
    for (; index < size; index += 1) {
      const item = list[index]
      if (item === 0 && 1 / item === infinity) return index
    }
    return -1
  }

  // Array
  if (Array.isArray(list)) {
    return list.indexOf(obj, from)
  }

  // ArrayLike
  return Array.prototype.indexOf.call(list, obj, from)
}

export default _indexOf
