export default function(from: number, to: number): Array<number> {
  if (to < from) return []
  const size = to - from
  const result = Array(size)
  let index = 0
  let value = from
  while (index < size) {
    result[index] = value
    value += 1
    index += 1
  }
  return result
}
