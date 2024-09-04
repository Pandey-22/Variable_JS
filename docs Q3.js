const prompt=require('prompt-sync')();
let num=parseInt(prompt("please enter the number:-"));
let last$digit=num%10;
console.log(last$digit);
