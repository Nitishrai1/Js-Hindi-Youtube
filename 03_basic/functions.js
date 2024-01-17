// Functions

function addtwonumber(number1,number2){
    return a+b;

}
const a=15
const b=78
const result=addtwonumber(a,b)
// console.log(`The sum of ${a} and ${b} is ${result}`);


// Funtions in objects
function calculatecartPrice(...num){   //...num is a rest operator also called as spread operator depends on uses
    return num

}
// console.log(calculatecartPrice(200,234,500,3234,654,32,534,));

function calculatecartPrice(val1,val2,...num){   //...num is a rest operator also called as spread operator depends on uses
    return {val1,val2,num}

}
console.log(calculatecartPrice(200,234,500,3234,654,32,534,));

// Object
const user={
    username:"nitish",
    price:150
}
function handleobject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleobject(user) predefined object

// creating direct object
handleobject({
    username: "nitish",
    price:300
})


// Passing array in function
const myarr=[200,300,100,600]
function returnsecondvalue(getarr){
    return getarr

}
console.log(returnsecondvalue(myarr));