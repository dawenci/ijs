import { _curry1 } from './internal/_curry'

function last(coll: string): string
function last<E>(coll: ArrayLike<E>): Array<E>
function last(coll) {
  if (!coll || !coll.length) return
  const index = (coll.length - 1) || 0
  return coll[index]
}

export default _curry1(last)
