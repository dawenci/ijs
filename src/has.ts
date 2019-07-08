import { curry2 } from './curry'

const hasOwn = Object.prototype.hasOwnProperty
function has(key, obj) {
  if (!obj) return false
  return hasOwn.call(obj, key)
}

export default curry2(has)
