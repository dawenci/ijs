export default function <E, R>(iteratee: (element: E, ...rest) => R, list: ArrayLike<E>): Array<R> {
  list = list || []
  const len = list.length || 0
  const results = Array(len)
  for (let index = 0; index < len; index += 1) {
    results[index] = iteratee(list[index])
  }
  return results
}
