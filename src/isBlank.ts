import { curry1 } from './curry'

export default curry1(string => /^\s*$/.test(string))
