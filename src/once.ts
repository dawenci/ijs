import { _curry1 } from './internal/_curry'

function once(fn) {
  let invoked = false
  let result
  return function() {
    if (invoked) return result
    result = fn.apply(void 0, arguments)
    invoked = true;
    return result
  }
}

export default _curry1(once)
