import { curry1 } from './curry'
import _indexOf from "./internal/_indexOf";
import _forEach from './internal/_forEach'

function uniq(list) {
  const result = []
  _forEach(item => {
    if (_indexOf(0, item, result) === -1) {
      result.push(item)
    }
  }, list)
  return result
}

export default curry1(uniq)
