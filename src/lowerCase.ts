import { curry1 } from "./curry";

const lowerCase = (str: string): string => str.toLowerCase()

export default curry1(lowerCase)
