import { curry1 } from './curry'

function last(coll: string): string
function last<E>(coll: ArrayLike<E>): Array<E>
function last(coll) {
  return coll[coll.length - 1]
}

export default curry1(last)
