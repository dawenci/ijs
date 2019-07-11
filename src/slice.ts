import { curry3 } from './curry'

const _slice = Array.prototype.slice
const slice = (from, to, list) => {
  if (!list) return []
  return _slice.call(list, from, to)
}

export default curry3(slice)
