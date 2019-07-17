import _isArrayLike from './_isArrayLike'

export default function concat(list1, list2, ...rest) {
  if (typeof list1 === 'string' || Array.isArray(list1)) {
    return list1.concat(list2, ...rest)
  }
  const result = []
  return result.concat.apply(result, arguments)
}
