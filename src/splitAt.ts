import { curry2 } from './curry'

export default curry2((index: number, list: string | Array<any>) => {
  return [list.slice(0, index), list.slice(index, list.length)]
})
