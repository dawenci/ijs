"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const slice = Array.prototype.slice;
function curry1(fn) {
    function curried(a) {
        if (arguments.length) {
            return fn(a);
        }
        return curried;
    }
    return curried;
}
exports.curry1 = curry1;
function curry2(fn) {
    function curried(a, b) {
        switch (arguments.length) {
            case 1: return curry1((b) => fn(a, b));
            case 2: return fn(a, b);
            case 0: return curried;
            default: return fn(a, b);
        }
    }
    return curried;
}
exports.curry2 = curry2;
function curry3(fn) {
    function curried(a, b, c) {
        switch (arguments.length) {
            case 1: return curry2((b, c) => fn(a, b, c));
            case 2: return curry1((c) => fn(a, b, c));
            case 3: return fn(a, b, c);
            case 0: return curried;
            default: return fn(a, b, c);
        }
    }
    return curried;
}
exports.curry3 = curry3;
function curryN(fn, n) {
    return function () {
        const consumedN = arguments.length;
        const restN = n - consumedN;
        if (restN <= 0) {
            return fn.apply(void 0, arguments);
        }
        const args = slice.call(arguments);
        if (restN === 1) {
            const curried = curry1(function (a) {
                args.push(a);
                return fn.apply(void 0, args);
            });
            return curried;
        }
        if (restN === 2) {
            const curried = curry2(function (a, b) {
                args.push(a, b);
                return fn.apply(void 0, args);
            });
            return curried;
        }
        if (restN === 3) {
            const curried = curry3(function (a, b, c) {
                args.push(a, b, c);
                return fn.apply(void 0, args);
            });
            return curried;
        }
        return curryN(function () {
            args.push.apply(args, arguments);
            return fn.apply(void 0, args);
        }, restN);
    };
}
exports.curryN = curryN;
function curry(fn) {
    const length = fn.length;
    switch (length) {
        case 2: return curry2(fn);
        case 1: return curry1(fn);
        case 3: return curry3(fn);
        case 0: return fn;
        default: return curryN(fn, length);
    }
}
exports.curry = curry;
const T_C_1 = curry((a) => a);
const T_C_1_1 = T_C_1(1);
exports.default = curry;
