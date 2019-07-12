import { curry2 } from './curry'

function apply(fn, args) {
  return fn.apply(void 0, args)
}

export default curry2(apply)
