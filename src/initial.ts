import { curry1 } from './curry'

const slice = Array.prototype.slice
export default curry1(<E>(coll: ArrayLike<E>): Array<E> => slice.call(coll, 0, coll.length - 1))
