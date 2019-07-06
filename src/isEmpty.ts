import { curry1 } from './curry'

export default curry1(<E>(coll: ArrayLike<E>): boolean => {
  if (Array.isArray(coll) || typeof coll === 'string') {
    return coll.length === 0
  }
  if (coll === null) {
    return true
  }
  if (typeof coll === 'object' || typeof coll === 'function') {
    return Object.keys(coll).length === 0
  }
  return true
})
