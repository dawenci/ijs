import { curry2 } from './curry'
export default curry2(<T, U>(a: T, b: U) => a && b)
