import { curry1 } from './curry'

export default curry1(coll => coll.slice(0, coll.length - 1))
