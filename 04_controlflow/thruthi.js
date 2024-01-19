// falsy value
//  false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
//  "0", 'false', true, " ", [], {}, function(){}

// how to check if a array is empty or not
const emptyobj={}
if(Object.keys(emptyobj).length===0){
    // console.log("Object is empty");
}
else{
    // console.log("object is not empty");
}

// Nullish coalesing Operator (??): null undeined

let val1;
val1=5??10
console.log(val1);
let val2;
val2=null??null??10
console.log(val2);