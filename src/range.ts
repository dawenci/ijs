import { curry2 } from './curry'

export default curry2((from, to) => {
  const result = []
  let index = from
  while (index < to) {
    result.push(index)
    index += 1
  }
  return result
})
