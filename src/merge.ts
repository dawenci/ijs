import { curry2 } from './curry';
import _merge from './internal/_merge'

function merge(to, from) {
  return Array.isArray(to)
    ? _merge([], to, from)
    : _merge({}, to, from)
}
 
export default curry2(merge)
