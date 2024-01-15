const  name="Nitish"
const repcount=50
// console.log(name+repocount+"value");   //this is old version 
console.log(`My name is  ${name} and my repocount is ${repcount}`);   //string interpulation this is new version
// Another way to declare
const gameNmae=new String('nitish')
console.log(gameNmae[0]);   //n
console.log(gameNmae.__proto__);
console.log(gameNmae.length);
console.log(gameNmae.toUpperCase());
console.log(gameNmae.charAt(4));
console.log(gameNmae.indexOf('t'));
const newstring=gameNmae.substring(0,4);
console.log(newstring);
const anotherstring=gameNmae.slice(-5,0);
console.log(anotherstring);


// To delte the extra white spaces trim is used
const space="       hello world      "
console.log(space);
console.log(space.trim());

//to replace the character
const url="https://nitish.com//nitish%20rai"
console.log(url.replace('%20','-'));
console.log(url.includes('nitish'));


// to split the sentence
console.log(gameNmae.split(' '));

    



