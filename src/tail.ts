import { curry1 } from './curry'

const slice = Array.prototype.slice

function tail(coll: string): string
function tail<E>(coll: ArrayLike<E>): Array<E>
function tail(coll) {
  if (coll == null) return []
  if (typeof coll === 'string' || Array.isArray(coll)) {
    return coll.slice(1)
  }
  return slice.call(coll, 1)
}

export default curry1(tail)
