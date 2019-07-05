import { curry3 } from './curry'

const slice = Array.prototype.slice

export default curry3((from, to, list) => {
  if (!list) return []
  return slice.call(list, from, to)
})
