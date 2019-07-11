// http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero
export default (a, b) => {
  if (a === b) return true
  if ((typeof a === 'number' && a !== a) && (typeof b === 'number' && b !== b)) {
    return true
  }
  return false
}
