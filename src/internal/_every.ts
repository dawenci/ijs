function every(predicate: (element: string) => any, list: string): boolean
function every<E>(predicate: (element: E) => any, list: ArrayLike<E>): boolean

function every(predicate, list) {
  if (!list || !list.length) return true

  const len = list.length
  let index = 0
  while (index < len) {
    if (!predicate(list[index])) return false
    index += 1
  }

  return true
}

export default every
