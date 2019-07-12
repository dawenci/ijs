function any(predicate: (element: string) => any, list: string): boolean
function any<E>(predicate: (element: E) => any, list: ArrayLike<E>): boolean

// some
function any(predicate, list) {
  if (!list || !list.length) return false
  const len = list.length
  for (let index = 0; index < len; index += 1) {
    if (predicate(list[index])) return true
  }
  return false
}

export default any
