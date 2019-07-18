import _indexOf from "./_sameValueIndexOf";
import _forEach from './_forEach'
import _any from './_any'

export default function uniqWith(compare: (a, b) => boolean, list) {
  const result = []
  const size = list.length
  for(let index = 0; index < size; index += 1) {
    const a = list[index]
    if (!_any(b => compare(a, b), result)) {
      result.push(a)
    }
  }
  return result
}
