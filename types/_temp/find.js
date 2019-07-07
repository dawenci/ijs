"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curry_1 = require("./curry");
function find(predicate, list) {
    const len = list.length || 0;
    let index = -1;
    while (++index < len) {
        if (predicate(list[index], index))
            return list[index];
    }
}
exports.default = curry_1.curry2(find);
