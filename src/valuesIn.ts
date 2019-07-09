import { curry1 } from './curry'

function valuesIn(obj: any) {
  const result = []
  if (obj === undefined || obj === null) return result

  obj = Object(obj)
  for (let prop in obj) {
    result.push(obj[prop])
  }
  return result
}

export default curry1(valuesIn)
