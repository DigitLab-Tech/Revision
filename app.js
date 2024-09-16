import {x, y, z} from "./variables.js";
import {test, anotherTest} from "./functions.js";
import Soulier from "./AClass.js";

const soulier = new Soulier(1, 2);

console.log(x, y, z);
console.log(test(4, 6), anotherTest(4, 6));
console.log(soulier.test(), soulier.anotherTest(), soulier.anotherAnotherTest());
