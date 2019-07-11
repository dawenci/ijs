import { curry2 } from './curry'

const startsWith = (substr: string, str: string) =>
  str.substr(0, substr.length) === substr

export default curry2(startsWith)
