import { curry1 } from './curry'

export default curry1((str: string): boolean => /^\s*$/.test(str))
