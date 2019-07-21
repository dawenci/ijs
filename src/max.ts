import { _curry2 } from './internal/_curry'

function max(a: number, b: number): number {
  return Math.max(a, b)
}

export default _curry2(max)
