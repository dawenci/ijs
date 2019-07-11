import { curry2 } from './curry'
import _uniqBy from './internal/_uniqBy'

function intersection(array1, array2) {
  let lookup
  let filtered
  if (array1.length > array2.length) {
    lookup = array1
    filtered = array2
  }
  else {
    lookup = array2
    filtered = array1
  }

  const strings = {}
  const numbers = {}
  let _undefined = false
  let _null = false
  
  let filteredSize = filtered.length
  while (filteredSize--) {
    const value = filtered[filteredSize]
    const type = typeof value
    if (type === 'string') {
      strings[value] = 1
    } else if (type === 'number') {
      numbers[value] = 1
    } else if (value === undefined) {
      _undefined = true
    } else if (value === null) {
      _null = true
    }
  }

  const result = []
  const size = lookup.length
  let index = -1
  while (++index < size) {
    const value = lookup[index]
    const type = typeof value
    if (type === 'number' && numbers[value]) {
      result.push(value)
    }
    else if (type === 'string' && strings[value]) {
      result.push(value)
    }
    else if (value === undefined && _undefined) {
      result.push(value)
    }
    else if (value === null && _null) {
      result.push(value)
    }
    else if (filtered.indexOf(value) !== -1) {
      result.push(value)
    }
  }

  return _uniqBy(i => i, result)
}

export default curry2(intersection)
