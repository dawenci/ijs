import { curry2 } from './curry'
const add: {(a, b): number} = (a, b) => (+a) + (+b)
export default curry2(add)
