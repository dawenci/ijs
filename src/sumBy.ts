import { _curry2 } from './internal/_curry'
import reduce from './reduce'
import add from './add'

function sumBy<E>(fn: (obj: any) => number, list: ArrayLike<E>): number {
  return reduce((acc: number, item: any) => add(acc, fn(item)) , 0, list)
}

export default _curry2(sumBy)
