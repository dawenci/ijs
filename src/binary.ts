import { curry1 } from './curry'

const binary = f => (x, y) => f(x, y)
export default curry1(binary)
