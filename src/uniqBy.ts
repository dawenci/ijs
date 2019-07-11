import { curry2 } from './curry'

function uniqBy(fn, list) {
  const values = []
  const result = []
  const numbers = {}
  const strings = {}
  const size = list.length >> 0
  let index = -1

  let _undefined = false
  let _null = false

  while (++index < size) {
    const item = list[index]
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
        if (values.indexOf(value) === -1) {
          values.push(value)
          result.push(item)
        }
      }
    }
  }
  return result
}


export default curry2(uniqBy)
