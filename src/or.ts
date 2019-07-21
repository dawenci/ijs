import { _curry2 } from './internal/_curry'
export default _curry2((a, b) => {
  if (a) return a
  return b
})
