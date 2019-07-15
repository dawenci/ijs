import { curry2 } from './curry'
import _range from './internal/_range'

export default curry2((from: number, to: number): Array<number> => {
  return _range(from, to)
})
