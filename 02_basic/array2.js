const marvel_heros=["ironman","natasha","vegien","captain america"]
const dc_heros=["superman","batman","flash"]
// marvel_heros.push(dc_heros)        //this will push the entire array as a element in the first array
// console.log(marvel_heros);     

const newheros=marvel_heros.concat(dc_heros)   //this will concatenate the the two array and store in a new array
console.log(newheros); 

const all_new_heros=[...marvel_heros,...dc_heros]      //this also spread the individual value in the new array
console.log(all_new_heros);

const another_array=[1,23,4,[4,6,7,8],9,10,[1,4,2,[8,5,1]]]
const usableanotherarray=another_array.flat(Infinity)    //this will create a new array from the nested array but this time it is flat


// Method to convert string into array
console.log(Array.isArray("Nitish"))     //this will check iif the elemnt is a array or not and return the bolean value
console.log(Array.from("Nitish"))        //this will convert the string into array by elemnt of the string  if not converted into array then empty array is returned

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));   //this will convert the value of scores into a array