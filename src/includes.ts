import { curry2 } from './curry'
import _sameValueIndexOf from './internal/_sameValueIndexOf'
import _keys from './internal/_keys'
import _sameValueZero from './internal/_sameValueZero'

export default curry2((item: any, list: any): boolean => {
  if (typeof list === 'string') {
    return list.indexOf(item) !== -1
  }
  if (Array.isArray(list)) {
    return _sameValueIndexOf(0, item, list) !== -1;
  }
  if (typeof list === 'object' && list !== null || typeof list === 'function') {
    const keys = _keys(list)
    let len = keys.length
    while (len--) {
      const value = list[keys[len]]
      // 兼容 NaN
      if (_sameValueZero(value, item)) return true
    }
  }
  return false
})
