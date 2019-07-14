import { _pipe, _pipeAll, _pipeWith } from './internal/_pipe'
import { curry1 } from './curry';

/**
 * 创建一个函数管道，参数列表中第一个函数为入口，
 * 入口可以接受多个参数，其他函数接受一个函数（接受前一个函数的返回值）
 * 
 * @param {Array<(...args: any[]) => any>} fnList 函数列表
 * @see I.compose
 */

// 函数列表
function pipe(fnList: Array<(...args: any[]) => any>)
// 函数列表，以及衔接函数之间的函数。值传递到下一个函数之前，经过该函数加工处理（如处理 undefined 等等）
function pipe(fnList: Array<(...args: any[]) => any>, withFn: (fn: (value: any) => any, value: any) => any)
// 两个函数
function pipe(fn1: (...args: any[]) => any, fn2: (arg: any) => any)

// 实现
function pipe(arg1, arg2?) {
  // 第一个输入是函数的情况，
  // 1. 第二个也是函数，则 pipe 返回
  // 2. 返回等待输入第二个函数的新函数
  if (typeof arg1 === 'function') {
    return typeof arg2 === 'function'
      ? _pipe(arg1, arg2)
      : curry1(arg2 => _pipe(arg1, arg2)) 
  }

  if (Array.isArray(arg1)) {
    const fnList = arg1.slice()
    const withFn = arg2
    const listSize = fnList.length

    // 数组中的函数少于两个，则返回一个等待输入函数的新函数
    if (listSize < 2) {
      const waitFor = function(other) {
        if (Array.isArray(other)) fnList.push.apply(fnList, other)
        else if (typeof other === 'function') fnList.push(other)
        else return waitFor
        return pipe(fnList, withFn)
      }
      return waitFor
    }
    // pipeWith
    if (typeof withFn === 'function') {
      return _pipeWith(withFn, fnList)
    }
    // pipeAll
    return _pipeAll(fnList)
  }

  return pipe
}

export default pipe
