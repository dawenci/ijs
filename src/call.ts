import { _curry2 } from './internal/_curry'

function call(fn: (...args: any[]) => any, ...args: any[]) {
  return fn.apply(void 0, args)
}

export default _curry2(call)
