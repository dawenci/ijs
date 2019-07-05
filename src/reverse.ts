import { curry1 } from './curry'

export default curry1(list => {
  if (Array.isArray(list)) {
    return list.slice().reverse()
  }
  if (typeof list === 'string') {
    return list.split('').reverse().join('')
  }
})
