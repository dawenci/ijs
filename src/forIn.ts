import { curry2 } from './curry'

function forIn(iteratee: (value: any) => any, obj: any) {
  if (obj === undefined || obj === null) return
  obj = Object(obj)
  for (let prop in obj) {
    if (iteratee(obj[prop]) === false) return
  }
}

export default curry2(forIn)
