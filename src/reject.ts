import { curry2 } from './curry'
import filter from './filter'
import _complement from './internal/_complement'

// filter 的反向
function reject(predicate, list) {
  return filter(_complement(predicate), list)
}

export default curry2(reject)
