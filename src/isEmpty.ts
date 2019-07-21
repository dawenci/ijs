import { _curry1 } from './internal/_curry'

function isEmpty(coll: string | Array<any>): boolean
function isEmpty(coll: Object): boolean
function isEmpty<E>(coll: ArrayLike<E>): boolean

function isEmpty(coll) {
  if (!coll) return true
  if (Array.isArray(coll) || typeof coll === 'string') {
    return coll.length === 0
  }

  if (coll === null) return true
  if (typeof coll === 'object' || typeof coll === 'function') {
    return Object.keys(coll).length === 0
  }
  return true
}

export default _curry1(isEmpty)
