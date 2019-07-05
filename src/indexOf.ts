import { curry2 } from './curry'

const nativeIndexOf = Array.prototype.indexOf

export default curry2((item, list) => nativeIndexOf.call(list, item))
