const _lastIndexOf = Array.prototype.lastIndexOf

function lastIndexOf(from: number, obj: string, list: string): number
function lastIndexOf<E>(from: number, obj: E, list: ArrayLike<E>): number
function lastIndexOf(from, obj, list) {
  if (!list || !list.length) return -1
  const size = list.length
  if (!size) return -1

  const max = size - 1
  if (from == null) from = max

  if (typeof list === 'string') {
    return list.lastIndexOf(obj, from)
  }

  // NaN
  if (obj !== obj) {
    let start = from + 1
    // 结果大于 size，则查询整个数组，相当于从末尾开始
    if (start > size) start = size
    // 小于零，则相对于 size 偏移，结果负数则不查找
    else if (start <= 0) start = size + start
    while (start-- > 0) {
      const item = list[start]
      if (item !== item) return start
    }
    return -1
  }  

  if (Array.isArray(list)) {
    return list.lastIndexOf(obj, from)
  }

  return _lastIndexOf.call(list, obj, from)
}

export default lastIndexOf
