import { _curry2 } from './internal/_curry'

const startsWith = (substr: string, str: string) =>
  str.substr(0, substr.length) === substr

export default _curry2(startsWith)
