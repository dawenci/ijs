import { _curry2 } from './internal/_curry'

const hasOwn = Object.prototype.hasOwnProperty
function has(key, obj) {
  if (!obj) return false
  return hasOwn.call(obj, key)
}

export default _curry2(has)
