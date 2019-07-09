import { curry2 } from './curry'
import _indexOf from "./internal/_indexOf";
import _forEach from './internal/_forEach'

function uniqBy(fn, list) {
  const values = []
  const result = []

  _forEach(item => {
    const value = fn(item)
    if (_indexOf(0, value, values) === -1) {
      values.push(value)
      result.push(item)
    }
  }, list)

  return result
}


export default curry2(uniqBy)
