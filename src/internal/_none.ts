import _isSequence from './_isSequence'

export default <E>(predicate: (e: E, i: number) => any, list: ArrayLike<E>): boolean => {
  if (!_isSequence(list)) return true
  const len = list.length
  for (let index = 0; index < len; index += 1) {
    if (predicate(list[index], index)) return false
  }
  return true
}
