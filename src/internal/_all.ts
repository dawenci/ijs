function all(predicate: (element: string) => any, list: string): boolean
function all<E>(predicate: (element: E) => any, list: ArrayLike<E>): boolean

// every
function all(predicate, list) {
  if (!list || !list.length) return true
  const len = list.length
  for (let index = 0; index < len; index += 1) {
    if (!predicate(list[index])) return false
  }
  return true
}

export default all
