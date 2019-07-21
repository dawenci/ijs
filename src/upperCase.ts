import { _curry1 } from "./internal/_curry";

const upperCase = (str: string): string => str.toUpperCase()

export default _curry1(upperCase)
