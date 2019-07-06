import { curry1 } from './curry'

export default curry1((pairs: Array<[any, any]>): Object => {
  const result = {}
  const len = pairs.length
  let index = 0
  while (index < len) {
    const [key, value] = pairs[index]
    result[key] = value
    index += 1
  }
  return result
})
