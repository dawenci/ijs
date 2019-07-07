import { curry2 } from './curry'

export default curry2((substr: string, str: string): boolean => {
  return str.substr(-substr.length) === substr
})
