function find(predicate: (element: string) => any, list: string): string
function find<E>(predicate: (element: E) => any, list: ArrayLike<E>): E
function find(predicate, list) {
  if (!list || !list.length) return undefined

  const len = list.length || 0
  let index = -1
  while (++index < len) {
    if (predicate(list[index])) return list[index]
  }
}

export default find
