import { curry1 } from './curry'

export default curry1(string => {
  string = ('' + string)
  if (!string.length) return string

  // TODO，处理可 upperCase 字符范围
  return string.charAt(0).toUpperCase() + string.slice(1)
})
