import { _curry3 } from './internal/_curry'

const replace = (regexp: RegExp, replacement: string, str: string): string => {
  return str.replace(regexp, replacement)
}

export default _curry3(replace)
