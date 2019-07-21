import { _curry1 } from './internal/_curry'
import _map from './internal/_map'
import _keys from './internal/_keys'

const values = typeof Object.values === 'function'
  ? Object.values
  : function values(obj: Object) {
    obj = Object(obj)
    const keys = _keys(obj)
    return _map<string, any>(key => obj[key], keys)
  }

export default _curry1(function(obj: any) {
  if (obj === undefined || obj === null) return []
  return values(obj)
})
