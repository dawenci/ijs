import { _curry2 } from './internal/_curry'
import _range from './internal/_range'

function range(from: number, to: number): Array<number> {
  return _range(from, to)
}

export default _curry2(range)
