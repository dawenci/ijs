import curry, { curry1 } from './curry'

const toString = Object.prototype.toString

export default curry1((test: any): string => {
  if (test === undefined) return 'Undefined'
  if (test === null)return 'Null'
  return toString.call(test).slice(8, -1)
})
