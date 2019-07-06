import { curry2 } from './curry'

export default curry2((item: any, list: ArrayLike<any>): boolean => {
  if (typeof list === 'string' || Array.isArray(list)) {
    return list.indexOf(item) !== -1
  }
  if (typeof list === 'object' && list !== null || typeof list === 'function') {
    const keys = Object.keys(list)
    let len = keys.length
    while (len--) {
      if (list[keys[len]] === item) return true
    }
  }
  return false
})
