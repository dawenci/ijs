"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curry_1 = require("./curry");
function first(list) {
    return list[0];
}
exports.default = curry_1.curry1(first);
