import { _curry2 } from './internal/_curry'

function forInIndexed(iteratee: (value: any, key: string) => any, obj: any) {
  if (obj === undefined || obj === null) return
  obj = Object(obj)
  for (let prop in obj) {
    if (iteratee(obj[prop], prop) === false) return
  }
}

export default _curry2(forInIndexed)
