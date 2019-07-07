"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curry_1 = require("./curry");
function capitalize(str) {
    str = ('' + str);
    if (!str.length)
        return str;
    // TODO，处理可 upperCase 字符范围
    return str.charAt(0).toUpperCase() + str.slice(1);
}
exports.default = curry_1.curry1(capitalize);
