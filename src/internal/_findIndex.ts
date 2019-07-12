function findIndex(predicate: (element: string) => any, list: string): number
function findIndex<E>(predicate: (element: E) => any, list: ArrayLike<E>): number
function findIndex(predicate, list) {
  if (!list || !list.length) return undefined
  const len = list.length || 0
  for (let index = 0; index < len; index += 1) {
    if (predicate(list[index])) return index
  }
}

export default findIndex
