function reject(predicate: (e: string) => any, list: string): Array<string>
function reject<E>(predicate: (e: E) => any, list: ArrayLike<E>): Array<E>
function reject(predicate, list) {
  if (!list || !list.length) return []
  const results = []
  const len = list.length || 0
  for (let index = 0; index < len; index += 1) {
    if (!predicate(list[index])) results.push(list[index])
  }
  return results
}

export default reject
