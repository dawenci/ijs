import { _curry1 } from './internal/_curry'

function reverse(list) {
  if (Array.isArray(list)) {
    return list.slice().reverse()
  }
  if (typeof list === 'string') {
    return list.split('').reverse().join('')
  }
}

export default _curry1(reverse)
