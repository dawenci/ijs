import { curry2 } from './curry'

// 不使用 split 的 limit 参数，以方便大部分场景的使用
const split = (separator: string | RegExp, str: string) => {
  return str.split(separator)
}

export default curry2(split)
