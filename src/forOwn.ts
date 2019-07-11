import { curry2 } from './curry'
import _keys from './internal/_keys'

function forOwn(iteratee: (value: any) => any, obj: any) {
  const keys = _keys(obj)
  const size = keys.length
  for (let index = 0; index < size; index += 1) {
    const value = obj[keys[index]]
    if (iteratee(value) === false) return
  }
}

export default curry2(forOwn)
