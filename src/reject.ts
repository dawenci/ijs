import { curry2 } from './curry'
import filter from './filter'
import complement from './complement'

// filter 的反向
function reject(predicate, list) {
  return filter(complement(predicate), list)
}

export default curry2(reject)
