function repeat<E> (e: E, n: number): Array<E> {
  let result = []
  do {
    if (n % 2) result.push(e)
    n = Math.floor(n / 2)
    if (n) result.push(e)
  } while (n)
  return result
}

export default repeat
