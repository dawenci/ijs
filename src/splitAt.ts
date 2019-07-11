import { curry2 } from './curry'

const splitAt = (index: number, list: string | Array<any>) => {
  return [list.slice(0, index), list.slice(index, list.length)]
}

export default curry2(splitAt)
