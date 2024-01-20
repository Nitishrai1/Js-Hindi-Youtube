const coding=["js","ruby","cpp","python","java"]
coding.forEach(function(item){    //for each do not return any type of value
    // console.log(item);
})
    //   OR

coding.forEach((item)=>{
    // console.log(item);
})      
    //    OR

function printme(item){
    // console.log(item);
}

coding.forEach(printme)

//   OR
coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})

const mycoding = [
    {
        languename:"javascript",
        languefile:"js"
    },
    {
        languename:"java",
        languefile:"java"
    },
    {
        languename:"python",
        languefile:"py"
    },
]
mycoding.forEach((item)=>{
    // console.log(item.languename);

})


// Filter function
// const mynum=[1,2,3,4,5,6,7,8,9,0]
// let newnum=mynum.filter((num)=> num>5)
// console.log(newnum);

const mynum=[1,2,3,4,5,6,7,8,9,0]
// const newnum=mynum.filter((num)=>{
// // When using scope then we have to return the value
//     return num>5

// })


// For each loop
const newnum=[]
mynum.forEach((num)=>{
    if(num>5){
        newnum.push(num)
    }
})
console.log(newnum);
