const prompt=require('prompt-sync')();
let n1=parseInt(prompt("please enter the 1st number:-"));
let n2=parseInt(prompt("please enter the 2nd number:-"));
console.log(Math.floor(n1/n2));
console.log(n1%n2);