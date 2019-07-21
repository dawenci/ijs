import { _curry2 } from './internal/_curry'

export default _curry2((substr: string, str: string): boolean => {
  return str.substr(-substr.length) === substr
})
