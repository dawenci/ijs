import { _curry2 } from './internal/_curry'
import filter from './filter'
import _complement from './internal/_complement'

// filter 的反向
function reject(predicate, list) {
  return filter(_complement(predicate), list)
}

export default _curry2(reject)
