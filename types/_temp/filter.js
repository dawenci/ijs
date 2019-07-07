"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curry_1 = require("./curry");
function filter(predicate, list) {
    const len = list.length || 0;
    const results = [];
    let index = -1;
    while (++index < len) {
        if (predicate(list[index], index))
            results.push(list[index]);
    }
    return results;
}
exports.default = curry_1.curry2(filter);
