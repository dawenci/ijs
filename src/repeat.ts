import { curry2 } from './curry'

export default curry2((string, n) => {
  let result = ''
  if (!string) return ''
  do {
    if (n % 2) result += string
    n = Math.floor(n / 2)
    if (n) string += string
  } while (n)
  return result
})
