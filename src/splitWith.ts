import { curry2 } from './curry'
import _findIndex from './internal/_findIndex'

const splitWith = (predicate: (e: any) => boolean, list: string | Array<any>) => {
  const index = _findIndex(predicate, list)
  return [list.slice(0, index), list.slice(index, list.length)]
}

export default curry2(splitWith)
