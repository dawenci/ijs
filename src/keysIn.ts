import { _curry1 } from './internal/_curry'
export default _curry1((obj: Object): Array<string> => {
  const keys = []
  for (let prop in obj) keys.push(prop)
  return keys
})
