// const prompt=require('prompt-sync')();
// let n1=parseInt(prompt("please enter the 1st number:-"));
// let n2=parseInt(prompt("please enter the 2nd number:-"));
// let n3=0;
// n3=n1;
// n1=n2;
// n2=n3;
// console.log("n1 = ",n1);
// console.log("n2 = ",n2);


const prompt=require('prompt-sync')();
let a=parseInt(prompt("please enter the 1st number:-"));
let b=parseInt(prompt("please enter the 2nd number:-"));
a=a+b;
b=a-b;
a=a-b;
console.log("a = ",a);
console.log("b = ",b);