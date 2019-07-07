"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curry_1 = require("./curry");
function every(predicate, list) {
    const len = list.length;
    let index = 0;
    while (index < len) {
        if (!predicate(list[index], index))
            return false;
        index += 1;
    }
    return true;
}
exports.default = curry_1.curry2(every);
