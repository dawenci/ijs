import { _curry2 } from './internal/_curry'
import _indexOf from './internal/_indexOf'
import _keys from './internal/_keys'
import _sameValue from './internal/_sameValue'
import _isArrayLike from './internal/_isArrayLike'
import _isObject from './internal/_isObject'

export default _curry2((item: any, list: any): boolean => {
  if (typeof list === 'string') {
    return list.indexOf(item) !== -1
  } 
  if (_isArrayLike(list)) {
    return _indexOf(0, item, list) !== -1;
  } 
  if (_isObject(list)) {
    const keys = _keys(list)
    let len = keys.length
    while (len--) {
      const value = list[keys[len]]
      if (_sameValue(value, item)) return true
    }
  }
  return false
})
