import { _curry2 } from './internal/_curry'

function forIn(iteratee: (value: any) => any, obj: any) {
  if (obj === undefined || obj === null) return
  obj = Object(obj)
  for (let prop in obj) {
    if (iteratee(obj[prop]) === false) return
  }
}

export default _curry2(forIn)
