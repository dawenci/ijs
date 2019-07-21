import { _curry1 } from './internal/_curry'
import _isSequence from './internal/_isSequence'

const slice = Array.prototype.slice
function initial(coll: string): string
function initial<E>(coll: ArrayLike<E>): Array<E>
function initial(coll) {
  if (!_isSequence(coll)) coll = []

  if (typeof coll === 'string' || Array.isArray(coll)) {
    return coll.slice(0, coll.length - 1)
  }
  return slice.call(coll, 0, coll.length - 1)
}

export default _curry1(initial)
