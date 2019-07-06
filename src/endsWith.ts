import { curry2 } from './curry'

function endsWith(substr: string, str: string): boolean {
  return str.substr(-substr.length) === substr
}

export default curry2(endsWith)
