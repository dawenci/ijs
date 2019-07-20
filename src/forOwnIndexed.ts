import { curry2 } from './curry'
import _keys from './internal/_keys'

function forOwnIndexed(iteratee: (value: any, key: string) => any, obj: any) {
  const keys = _keys(obj)
  const size = keys.length
  for (let index = 0; index < size; index += 1) {
    const key = keys[index]
    const value = obj[key]
    if (iteratee(value, key) === false) return
  }
}

export default curry2(forOwnIndexed)
