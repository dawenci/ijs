import _sameValueZero from './_sameValueZero'

// equality algorithm: SameValue
// 
// SameValue 的行为在 `===` 基础上，增加对 NaN, +-0 的特殊处理
// 1. NaN 和 NaN 之间被认为是相等的
// 2. +0 和 -0 之间是不等的
//
const _sameValue = typeof Object.is === 'function'
  ? Object.is
  : function(a, b) {
    if (typeof a === 'number') {
      // +0, -0 的情况
      if (a === b) return 1 / a === 1 / b
      // a，b 均为 NaN 返回 true
      if (a !== a && b !== b) return true
      return false
    }
    return a === b
  }

export default _sameValue
