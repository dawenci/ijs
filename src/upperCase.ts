import { curry1 } from "./curry";

const upperCase = (str: string): string => str.toUpperCase()

export default curry1(upperCase)
