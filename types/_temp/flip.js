"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curry_1 = require("./curry");
const slice = Array.prototype.slice;
/**
 * 交换 fn 的头两个参数
 * 返回柯里化后的新函数
 *
 * 对比：
 * Rf.curry((a, b) => a - b)(1, 2) // -1
 * Rf.flip((a, b) => a - b)(1, 2) // 1
 *
 */
function flip(fn) {
    const n = fn.length;
    if (n >= 2) {
        return curry_1.curryN(function () {
            const args = slice.call(arguments);
            const firstArg = args[0];
            args[0] = args[1];
            args[1] = firstArg;
            return fn.apply(void 0, args);
        }, n);
    }
    return curry_1.curry1(fn);
}
exports.default = curry_1.curry1(flip);
