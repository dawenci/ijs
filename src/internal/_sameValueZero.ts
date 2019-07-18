// equality algorithm: SameValueZero
// 
// http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero
// 
// SameValueZero 的行为在 `===` 基础上，增加对 NaN 的特殊处理
// NaN 和 NaN 之间被认为是相等的
// 该算法被应用在 %TypedArray% 和 ArrayBuffer 构造函数、以及Map和Set操作,
// 并将用于 ES2016/ES7 中的String.prototype.includes
// 
export default (a: any, b: any): boolean => {
  if (a === b || (a !== a && b !== b)) return true
  return false
}
