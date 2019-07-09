export default <E, R>(iteratee: (element: E) => R, list: ArrayLike<E>): Array<R> => {
  list = list || []
  const len = list.length || 0
  const results = Array(len)
  let index = -1
  while (++index < len) {
    results[index] = iteratee(list[index])
  }
  return results
}
