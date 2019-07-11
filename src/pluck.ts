import { curry2 } from './curry'
import map from './map'
import property from './property'

function pluck(prop, list) {
  return map(property(prop), list)
}

export default curry2(pluck)
