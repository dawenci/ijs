import { curry2 } from './curry'

export default curry2((substr, string) => string.substr(-substr.length) === substr)
