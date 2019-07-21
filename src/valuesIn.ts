import { _curry1 } from './internal/_curry'

function valuesIn(obj: any) {
  const result = []
  if (obj === undefined || obj === null) return result

  obj = Object(obj)
  for (let prop in obj) {
    result.push(obj[prop])
  }
  return result
}

export default _curry1(valuesIn)
