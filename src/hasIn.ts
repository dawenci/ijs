import { _curry2 } from './internal/_curry'

function hasIn(key, obj) {
  if (!obj) return false
  key = String(key)

  for (let prop in obj) {
    if (key === prop) return true
  }
  return false
}

export default _curry2(hasIn)
