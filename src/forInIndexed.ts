import { curry2 } from './curry'

function forInIndexed(iteratee: (value: any, key: string) => any, obj: any) {
  if (obj === undefined || obj === null) return
  obj = Object(obj)
  for (let prop in obj) {
    if (iteratee(obj[prop], prop) === false) return
  }
}

export default curry2(forInIndexed)
