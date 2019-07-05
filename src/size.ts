import { curry1 } from './curry'

export default curry1(list => list && list.length !== undefined ? list.length : NaN)
