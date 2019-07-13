import { curry1 } from './curry'

const unary = f => x => f(x)
export default curry1(unary)
