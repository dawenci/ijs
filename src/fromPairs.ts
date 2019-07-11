import { curry1 } from './curry'

export default curry1((pairs: Array<[any, any]>): Object => {
  const result = {}
  const len = pairs.length
  for (let index = 0; index < len; index += 1) {
    const [key, value] = pairs[index]
    result[key] = value
  }
  return result
})
