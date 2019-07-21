import { _curry2 } from './internal/_curry'

function min(a: number, b: number): number {
  return Math.min(a, b)
}

export default _curry2(min)
