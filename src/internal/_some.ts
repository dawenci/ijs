function some(predicate: (element: string) => any, list: string): boolean
function some<E>(predicate: (element: E) => any, list: ArrayLike<E>): boolean

function some(predicate, list) {
  if (!list || !list.length) return false

  const len = list.length
  let index = 0
  while (index < len) {
    if (predicate(list[index])) return true
    index += 1
  }
  return false
}

export default some
