import { _curry2 } from './internal/_curry'
import _repeat from './internal/_repeat'

function repeat<E>(e: E, n: number): Array<E> {
  return _repeat(e, n)
}

export default _curry2(repeat)
