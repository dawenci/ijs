import { curry1 } from './curry'

const slice = Array.prototype.slice
function initial(coll: string): string
function initial<E>(coll: ArrayLike<E>): Array<E>
function initial(coll) {
  if (coll == null) return []
  if (typeof coll === 'string' || Array.isArray(coll)) {
    return coll.slice(0, coll.length - 1)
  }
  return slice.call(coll, 0, coll.length - 1)
}

export default curry1(initial)
