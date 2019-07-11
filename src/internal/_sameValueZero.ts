// http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero
export default (a, b) => {
  // 特别处理 NaN
  if (a === b || (a !== a && b !== b)) return true
  return false
}
