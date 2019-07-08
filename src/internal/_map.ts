export default <E>(iteratee: (element: E) => any, list: ArrayLike<E>): Array<E> => {
  list = list || []
  const len = list.length || 0
  const results = Array(len)
  let index = -1
  while (++index < len) {
    results[index] = iteratee(list[index])
  }
  return results
}
