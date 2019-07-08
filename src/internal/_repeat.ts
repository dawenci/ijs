function repeat (str: string, n: number): string {
  let result = ''
  if (!str) return ''
  do {
    if (n % 2) result += str
    n = Math.floor(n / 2)
    if (n) str += str
  } while (n)
  return result
}

export default repeat
