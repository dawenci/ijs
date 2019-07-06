import { curry3 } from './curry'

export default curry3((regexp: RegExp, replacement: string, str: string): string => {
  return str.replace(regexp, replacement)
})
