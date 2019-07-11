import _indexOf from './_indexOf'

export default function uniqBy(fn, array) {
  const result = []
  const size = array.length >>> 0

  const values = []
  const numbers = {}
  const strings = {}

  let _undefined = false
  let _null = false

  for (let index = 0; index < size; index += 1) {
    const item = array[index]
    const value = fn(item)
    // 空间换时间加速比较
    switch (typeof value) {
      case 'string': {
        if (strings[value]) continue
        values.push(value)
        result.push(item)
        strings[value] = 1
        break
      }

      // 含 (+-)Infinity, NaN
      case 'number': {
        if (numbers[value]) continue
        values.push(value)
        result.push(item)
        numbers[value] = 1
        break
      }

      case 'undefined': {
        if (_undefined) continue
        _undefined = true
        result.push(item)
        break
      }

      case 'object': {
        if (value === null) {
          if (_null) continue
          _null = true
          result.push(item)
          break
        }
      }

      default: {
        // 无需处理 NaN（已经在 numbers 中处理）
        if (values.indexOf(value) === -1) {
          values.push(value)
          result.push(item)
        }
      }

    }
  }

  return result
}
