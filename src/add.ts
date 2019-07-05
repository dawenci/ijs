import { curry2 } from './curry'
export default curry2((a: number | string, b: number | string) => (+a) + (+b))
