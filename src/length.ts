import { curry1 } from './curry'

export default curry1((list: ArrayLike<any>): number => list && list.length !== undefined ? list.length : NaN)
