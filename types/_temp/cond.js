"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curry_1 = require("./curry");
function cond(pairs = []) {
    const count = pairs.length;
    let index = 0;
    return function () {
        while (index < count) {
            const [test, action] = pairs[index];
            if (test.apply(void 0, arguments)) {
                return action.apply(void 0, arguments);
            }
            index += 1;
        }
    };
}
exports.default = curry_1.curry1(cond);
