"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curry_1 = require("./curry");
function and(a, b) {
    if (!a)
        return a;
    return b;
}
exports.default = curry_1.curry2(and);
