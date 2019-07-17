const _arrSlice = Array.prototype.slice
const _strSlice = String.prototype.slice

const slice = (from, to, list) => {
  if (typeof list === 'string') {
    if (!list) return ''
    return _strSlice.call(list, from, to)
  }
  if (Array.isArray(list)) {
    return _arrSlice.call(list, from, to)
  }
  if (list && typeof list.length === 'number') {
    return _arrSlice.call(list, from, to)
  }
  return []
}

export default slice
