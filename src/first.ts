import { _curry1 } from './internal/_curry'

function first(coll: string): string
function first<E>(coll: ArrayLike<E>): Array<E>
function first(coll) {
  if (!coll || !coll.length) return
  return coll[0]
}

export default _curry1(first)
