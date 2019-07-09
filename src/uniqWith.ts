import { curry2 } from './curry'
import _indexOf from "./internal/_indexOf";
import _forEach from './internal/_forEach'
import _some from './internal/_some'

function uniqWith(compare: (a, b) => boolean, list) {
  const result = []

  _forEach(a => {
    if (!_some(b => compare(a, b), result)) {
      result.push(a)
    }
  }, list)

  return result
}


export default curry2(uniqWith)
