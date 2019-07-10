import { curry2 } from './curry'
import reduce from './reduce'
import add from './add'

function sumBy<E>(fn: (obj: any) => number, list: ArrayLike<E>): number {
  return reduce((acc: number, item: any) => add(acc, fn(item)) , 0, list)
}

export default curry2(sumBy)
