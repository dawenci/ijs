const toString = Object.prototype.toString

export default (test => {
  if (test === undefined) return 'Undefined'
  if (test === null)return 'Null'
  return toString.call(test).slice(8, -1)
})
