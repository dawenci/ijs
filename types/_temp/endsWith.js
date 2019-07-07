"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curry_1 = require("./curry");
function endsWith(substr, str) {
    return str.substr(-substr.length) === substr;
}
exports.default = curry_1.curry2(endsWith);
