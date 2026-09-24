import {add,multiply} from './maths.js';
import assert from "assert";

assert.strictEqual(add(2, 3), 5);
assert.strictEqual(multiply(2, 3), 6);
console.log("Test passed!");