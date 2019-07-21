import { _curry1 } from "./internal/_curry";

const lowerCase = (str: string): string => str.toLowerCase()

export default _curry1(lowerCase)
