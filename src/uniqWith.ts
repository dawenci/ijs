import { curry2 } from './curry'
import _indexOf from "./internal/_indexOf";
import _forEach from './internal/_forEach'
import _some from './internal/_some'

function uniqWith(compare: (a, b) => boolean, list) {
  const result = []
  const size = list.length
  for(let index = 0; index < size; index += 1) {
    const a = list[index]
    if (!_some(b => compare(a, b), result)) {
      result.push(a)
    }
  }
  return result
}


export default curry2(uniqWith)
