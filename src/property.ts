import { _curry2 } from './internal/_curry'

function property(prop: number | string, obj: any) {
  if (obj == null) return undefined
  return obj[prop]
}

export default _curry2(property)
