// Declareing number
const balance=new Number(100)
console.log(balance);

// Precision pure number per hota hai decimal ke bad nhui
const othernumber=123.897
console.log(othernumber.toPrecision(3));   //124   ye round off karta hai
console.log(othernumber.toFixed(1));      //123.90    ye decimal ke baad ka precision hai

const hundreds=10000000
console.log(hundreds.toLocaleString());   //10,000,000


//  ******************************************* Maths library ********************************************* //
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.floor(2.1));
console.log(Math.ceil(7.9));
console.log(Math.max(4,3,8));
console.log(Math.min(1,-2,6));
console.log(Math.random());   // random value between o and 1

// to make the random function come greater then 0
console.log((Math.random()*10)+1);
// To find the random number between 10 to 20
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min); 

 

