import { curry1 } from './curry'
export default curry1(<E>(list: ArrayLike<E>): E => list[list.length - 1])
