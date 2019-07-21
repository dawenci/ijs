import { _curry1 } from './internal/_curry'

const unary = (f) => (x) => f(x)

export default _curry1(unary)
