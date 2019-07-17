// samevaluezero 比较
// http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero
// 
// 特别处理 NaN
export default (a: any, b: any): boolean => {
  if (a === b || (a !== a && b !== b)) return true
  return false
}
