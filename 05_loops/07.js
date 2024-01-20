const mynum=[1,2,4,5,6,7,8,9,0]
const newnum=mynum.map((num)=>num+10)
// console.log(newnum);

// Chaining 
const num1=mynum.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>30)
// console.log(num1);

// Reduce method   : int hsi function we give a initial value to acc to 0 and then the curr value is 1 2 3 then the acc value will be updated to the new acc+curr and so on
const mynum2=[1,2,3]
// const mytotal=mynum2.reduce(function(acc,curr){
//     console.log(`acc: ${acc} and curr: ${curr}`)
//     return acc+curr
// },8)   

// Write above code int arrow function
const mytotal=mynum2.reduce((acc,curr)=>acc+curr,8)
console.log(mytotal);

// q: given a array of object return the total price of the courses 
const course=[
    {
        courses:"js course",
        price:999
    },
    {
    
    courses:"data science course",
    price:1999
    },
    {

    courses:"py course",
    price:11999
    },
    {

        courses:"web dev course",
        price:21999
    },
]
const totalcost=course.reduce((acc,item)=>acc+item.price,0)
console.log(totalcost);