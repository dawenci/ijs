import { curry1 } from './curry'

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

export default curry1(once)
