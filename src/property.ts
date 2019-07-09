import { curry2 } from './curry'

function property(prop: number | string, obj: any) {
  if (obj == null) return undefined
  return obj[prop]
}

export default curry2(property)
