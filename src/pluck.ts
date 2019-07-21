import { _curry2 } from './internal/_curry'
import map from './map'
import property from './property'

function pluck(prop, list) {
  return map(property(prop), list)
}

export default _curry2(pluck)
