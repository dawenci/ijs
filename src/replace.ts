import { curry3 } from './curry'

const replace = (regexp: RegExp, replacement: string, str: string): string => {
  return str.replace(regexp, replacement)
}

export default curry3(replace)
