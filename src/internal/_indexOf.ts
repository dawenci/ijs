// Array.prototype.indexOf, Array.prototype.lastIndexOf, 和 case-matching 中使用的
// 相等算法是 `===`，我们的实现采用 `SameValue` 算法
import _sameValue from './_sameValue'

function _sameValueIndexOf(from: number, obj: string, list: string): number
function _sameValueIndexOf<E>(from: number, obj: E, list: ArrayLike<E>): number
function _sameValueIndexOf(from, obj, list) {
  if (!list) return -1

  const size = list.length
  if (!size) return -1

  if (from == null) from = 0

  if (typeof list === 'string') {
    return list.indexOf(obj, from)
  }

  // NaN, +- 0
  if (typeof obj === 'number' && (obj !== obj || obj === 0)) {
    const size = list.length
    let index = from
    if (index < 0) index = size + index
    if (index >= size) return -1
    // 小于零则修改成 0，减少循环次数
    if (index < 0) index = 0
    for (; index < size; index += 1) {
      const item = list[index]
      if (_sameValue(obj, item)) return index
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

export default _sameValueIndexOf
