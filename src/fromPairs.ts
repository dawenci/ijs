import { _curry1 } from './internal/_curry'
import { Pair } from './pair'

function fromPairs (pairs: Array<Pair>): Object {
  const result = {}
  const len = pairs.length
  for (let index = 0; index < len; index += 1) {
    const [key, value] = pairs[index]
    result[key] = value
  }
  return result
}

export default _curry1(fromPairs)
