import { curry2 } from './curry'
import _indexOf from './internal/_indexOf'
import _keys from './internal/_keys'
import _sameValueZero from './internal/_sameValueZero'

export default curry2((item: any, list: any): boolean => {
  if (typeof list === 'string' || Array.isArray(list)) {
    return _indexOf(0, item, list) !== -1;
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
