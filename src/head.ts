import { curry1 } from './curry'

function head(coll: string): string
function head<E>(coll: ArrayLike<E>): Array<E>
function head(coll) {
  return coll[0]
}

export default curry1(head)
