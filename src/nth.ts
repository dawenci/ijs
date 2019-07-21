import { _curry2 } from './internal/_curry'
import type from './type'

export default _curry2((index: number, coll: any): any => {
  if (!coll || !coll.length) return
  index = index < 0 ? coll.length + index : index

  if (type(coll) === 'String') {
    return coll.charAt(index)
  }
  return coll[index]
})
