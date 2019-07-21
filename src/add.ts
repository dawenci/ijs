import { _curry2 } from './internal/_curry'

function add(a: number, b: number): number {
  return (+a) + (+b)
}

export default _curry2(add)
