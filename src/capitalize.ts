import { _curry1 } from './internal/_curry'

function capitalize(str: string): string {
  str = ('' + str).trim()
  if (!str.length) return str
  return str.replace(/^([a-z])/, (_, char) => char.toUpperCase())
}

export default _curry1(capitalize)
