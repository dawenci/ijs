import { _curry2 } from './internal/_curry'

function apply(fn: (...args: any[]) => any, args: any[]) {
  if (!args || !args.length) args = []
  return fn.apply(void 0, args)
}

export default _curry2(apply)
