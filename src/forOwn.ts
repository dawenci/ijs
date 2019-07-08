import { curry2 } from './curry'

function forOwn(iteratee: (value: any) => any, obj: any) {
  if (obj === undefined || obj === null) return
  obj = Object(obj)
  const keys = Object.keys(obj)
  const size = keys.length
  for (let index = 0; index < size; index += 1) {
    const value = obj[keys[index]]
    if (iteratee(value) === false) return
  }
}

export default curry2(forOwn)
