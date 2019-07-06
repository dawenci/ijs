import { curry1 } from './curry'
export default curry1((obj: Object): Array<string> => {
  const keys = []
  for (let prop in obj) keys.push(prop)
  return keys
})
