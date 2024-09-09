
//Example1
const calculator = require('./calculator'); 
console.log(calculator.add(2, 3)); 
console.log(calculator.sub(2, 3)); 


//Example2
const {formatDate} = require("./calculator.js");

console.log(formatDate(new Date(2017, 9, 13),"dddd the Do"));