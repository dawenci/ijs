import { _curry2 } from './internal/_curry'

// 不使用 split 的 limit 参数，以方便大部分场景的使用
const split = (separator: string | RegExp, str: string): string[] => {
  return str.split(separator)
}

export default _curry2(split)
