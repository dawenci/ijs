import { curry2 } from './curry'

function call(fn: (...args: any[]) => any, ...args: any[]) {
  return fn.apply(void 0, args)
}

export default curry2(call)
