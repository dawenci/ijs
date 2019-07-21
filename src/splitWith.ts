import { _curry2 } from './internal/_curry'
import _findIndex from './internal/_findIndex'

const splitWith = (predicate: (e: any) => boolean, list: string | Array<any>) => {
  const index = _findIndex(predicate, list)
  return [list.slice(0, index), list.slice(index, list.length)]
}

export default _curry2(splitWith)
