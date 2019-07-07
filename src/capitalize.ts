import { curry1 } from './curry'

export default curry1((str: string): string => {
  str = ('' + str)
  if (!str.length) return str

  // TODO，处理可 upperCase 字符范围
  return str.charAt(0).toUpperCase() + str.slice(1)
})
