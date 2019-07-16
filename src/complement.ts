import { curry1 } from "./curry";
import _arity from './internal/_arity'

function complement(fn: (...args: any[]) => boolean) {
  return _arity(fn.length, function() {
    return !fn.apply(void 0, arguments)
  })
}

export default curry1(complement)
