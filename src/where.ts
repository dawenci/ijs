import { _curry2 } from './internal/_curry'
import _keys from './internal/_keys'

function where(spec: Object, obj: Object): boolean {
  if (spec == null) spec = {}
  if (obj == null) return false
  const keys = _keys(spec)
  const len = keys.length
  for (let index = 0; index < len; index += 1) {
    const key = keys[index]
    const pred = spec[key]
    if (!pred(obj[key])) return false
  }
  return true
}
export default _curry2(where)
