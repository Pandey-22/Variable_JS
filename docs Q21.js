const prompt=require('prompt-sync')();
let A=parseInt(prompt("please enter the first number:-"));
let B=parseInt(prompt("please enter the second number:-"));
let result=A-(A%B);
console.log(result);