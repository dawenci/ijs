import { _curry2 } from './internal/_curry'

export type Pair<H = any, T = any> = [H, T]

function pair<A, B>(a: A, b: B): Pair<A, B> {
  return [a, b]
}

export default _curry2(pair)
