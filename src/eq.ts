import { curry2 } from './curry'
import _eq from './internal/_sameValueZero'

export default curry2(_eq)
