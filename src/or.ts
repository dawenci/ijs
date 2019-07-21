import { _curry2 } from './internal/_curry'

function or(a, b) {
  return a || b
}

export default _curry2(or)
