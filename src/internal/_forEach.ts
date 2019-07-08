function forEach<E>(iteratee: (element: E | string) => any, list: ArrayLike<E> | string): void {
  list = list || []
  const len = list.length || 0
  let index = -1
  while (++index < len) {
    if (iteratee(list[index]) === false) return
  }
}

export default forEach
