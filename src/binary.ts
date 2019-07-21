import { _curry1 } from './internal/_curry'

const binary = (f) => (x, y) => f(x, y)

export default _curry1(binary)
