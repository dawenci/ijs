import { _curry2 } from './internal/_curry';
import _merge from './internal/_merge'

function merge(to, from) {
  return Array.isArray(to)
    ? _merge([], to, from)
    : _merge({}, to, from)
}

export default _curry2(merge)
