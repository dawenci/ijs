import _some from './_some'
import _none from './_none'
import _uniqBy from './_uniqBy'

export default function intersectionWith(compare, array1, array2) {
  const result = []
  array1 = _uniqBy(i => i, array1)
  array2 = _uniqBy(i => i, array2)

  const size = array1.length
  for (let index = 0; index < size; index += 1) {
    const item = array1[index]
    if (_some(item2 => compare(item, item2), array2)
      && _none(res => compare(item, res), result)
    ) {
      result.push(item)
    }
  }

  return result
}
