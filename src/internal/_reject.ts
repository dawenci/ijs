function reject(predicate: (e: string) => any, list: string): Array<string>
function reject<E>(predicate: (e: E) => any, list: ArrayLike<E>): Array<E>
function reject(predicate, list) {
  if (!list || !list.length) return []
  const len = list.length || 0
  const results = []
  let index = -1
  while (++index < len) {
    if (!predicate(list[index])) results.push(list[index])
  }
  return results
}

export default reject
