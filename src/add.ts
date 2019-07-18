import { curry2 } from './curry'

function add(a: number, b: number): number {
  return (+a) + (+b)
}

export default curry2(add)
