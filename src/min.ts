import { curry2 } from './curry'

function min(a: number, b: number): number {
  return Math.min(a, b)
}

export default curry2(min)
