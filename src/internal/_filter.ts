function filter(predicate: (element: string) => any, list: string): Array<string>
function filter<E>(predicate: (element: E) => any, list: ArrayLike<E>): Array<E>

function filter(predicate, list) {
  if (!list || !list.length) return []

  const len = list.length || 0
  const results = []
  let index = -1
  while (++index < len) {
    if (predicate(list[index])) results.push(list[index])
  }
  return results
}

export default filter
