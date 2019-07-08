import { curry2 } from './curry'

function hasIn(key, obj) {
  if (!obj) return false
  key = String(key)

  for (let prop in obj) {
    if (key === prop) return true
  }
  return false
}

export default curry2(hasIn)
