import { _curry1 } from './internal/_curry'

function camelCase(str: string): string {
  str = ('' + str).trim()
  if (!str.length) return str
  return str
    .replace(/[-_]+([\S])/g, (_, char) => char.toUpperCase())
    .replace(/^([A-Z])/, (_, char) => char.toLowerCase())
}

export default _curry1(camelCase)
