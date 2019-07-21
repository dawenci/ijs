function forEach<E>(iteratee: (element: E | string) => any, list: ArrayLike<E> | string): void {
  const len = list.length || 0
  for (let index = 0; index < len; index += 1) {
    if (iteratee(list[index]) === false) return
  }
}

export default forEach
