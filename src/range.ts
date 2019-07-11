import { curry2 } from './curry'

export default curry2((from: number, to: number): Array<number> => {
  const result = []
  for (let index = from; index < to; index += 1) {
    result.push(index)
  }
  return result
})
