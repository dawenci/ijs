import { curry2 } from './curry'

export type Pair<H = any, T = any> = [H, T]

function pair<A, B>(a: A, b: B): Pair<A, B> {
  return [a, b]
}

export default curry2(pair)
