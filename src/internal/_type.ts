const toString = Object.prototype.toString
export default (test: any): string => {
  if (test === undefined) return 'Undefined'
  if (test === null)return 'Null'
  return toString.call(test).slice(8, -1)
}
