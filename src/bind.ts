import { curry2 } from './curry'

/**
 * 返回一个 this 指向 object 的 bound 函数
 * 跟 Function.prototype.bind 不一样的地方为，
 * 不会绑定额外传入的参数作为参数
 * @param {Function} fn
 * @returns {Function}
 */
function bind<T extends any[], R>(fn: (...args: T) => R, object: any): (...args: T) => R {
  return fn.bind(object)
}

export default curry2(bind)
