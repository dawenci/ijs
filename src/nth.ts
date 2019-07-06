import { curry2 } from './curry'
import type from './type'

export default curry2((index: number, coll: any): any => {
  if (coll === null) return
  index = index < 0 ? coll.length + index : index
  if (type(coll) === 'String') {
    return coll.charAt(index)
  }
  return coll[index]
})
