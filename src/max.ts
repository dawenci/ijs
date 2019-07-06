import { curry2 } from './curry'
export default curry2((a: number, b: number): number => a > b ? a : b)
