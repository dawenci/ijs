import { curry1 } from './curry'

function camelCase(str: string): string {
  str = ('' + str).trim()
  if (!str.length) return str
  return str
    .replace(/[-_]+([\S])/g, (_, char) => char.toUpperCase())
    .replace(/^([A-Z])/, (_, char) => char.toLowerCase())
}

export default curry1(camelCase)
