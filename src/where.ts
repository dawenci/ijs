import { curry2 } from './curry'
import _keys from './internal/_keys'

function where(spec: Object, obj: Object): boolean {
  if (spec == null) spec = {}
  if (obj == null) return false

  const keys = _keys(spec)
  const len = keys.length
  let index = -1
  while (++index < len) {
    const key = keys[index]
    const pred = spec[key]
    if (!pred(obj[key])) return false
  }
  return true
}
export default curry2(where)
