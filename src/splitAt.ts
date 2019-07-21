import { _curry2 } from './internal/_curry'

const splitAt = (index: number, list: string | Array<any>) => {
  return [list.slice(0, index), list.slice(index, list.length)]
}

export default _curry2(splitAt)
