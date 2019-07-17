import { curry2 } from './curry'

function max(a: number, b: number): number {
  return Math.max(a, b)
}

export default curry2(max)
