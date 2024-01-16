// array
const myarr=[0,1,3,5,6,7,"nitish"]
const myarr2=new Array(1,2,3,4,5,6,8)
console.log(myarr[6]);
console.log(myarr2[1]);


// Array methods
myarr.push("Rai")
console.log(myarr);
// console.log(myarr)

myarr.pop()  //it is used to remove the last element of the array
myarr.unshift(10)         //this insert the value at the starting of the array
myarr.shift()   //this dift the position of first element by delteing the first element
console.log(myarr);
console.log(myarr.includes(1));   //true return the boolean value
console.log(myarr.indexOf(3));   //it return s the index position of that value

const newarr=myarr.join()
console.log(newarr);  //this convert the type arry to string


console.log("A",myarr);
const newarr2=myarr.slice(1,3)   //this return the value indexing from 1 to 2 not includeing 3

console.log("B",newarr2);

const myarr3=myarr.splice(1,3)   //this remove the element from the array ranging from 1 to 3 includeing 3
console.log("c ",myarr3);   
