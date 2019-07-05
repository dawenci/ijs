import { curry3 } from './curry'

export default curry3((regexp, replacement, str) => {
  return str.replace(regexp, replacement)
})
