const coding=["js","ruby","cpp","python","java"]
coding.forEach(function(item){
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
    console.log(item.languename);

})