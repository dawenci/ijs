import { curry1 } from './curry'
import _arity from './internal/_arity'

const unary = fn => _arity(1, fn)
export default curry1(unary)
