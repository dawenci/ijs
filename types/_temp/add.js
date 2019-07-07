"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curry_1 = require("./curry");
const add = (a, b) => (+a) + (+b);
exports.default = curry_1.curry2(add);
