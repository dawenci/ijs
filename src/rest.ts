import { _curry1 } from './internal/_curry'
import _isSequence from './internal/_isSequence'

const slice = Array.prototype.slice

function rest(coll: string): string
function rest<E>(coll: ArrayLike<E>): Array<E>
function rest(coll) {
  if (!_isSequence(coll)) coll = []

  if (typeof coll === 'string' || Array.isArray(coll)) {
    return coll.slice(1)
  }
  return slice.call(coll, 1)
}

export default _curry1(rest)
