let a=10
const b=20
var c=30
// console.log(a);
// console.log(b);
// console.log(c);

if(true){
    let a=10
    const b=100
    var c=80
}

// console.log(a);
// console.log(b);
// console.log(c);    //this will generate a wrong value because var does not follow scope that is why var is not used mostly


// Scope inside nested functions
function one(){
    const username="nitish"
    function two(){
        const website="youtube"
    //     console.log(username);
    // console.log(website)

    }
    // two()
}
one()

// Scope in if statemenrt
if(true){
    const username="Nitish"
    if(username=="Nitish"){
       const  website="codehelp"
    //    console.log(username+website);
    }
    // console.log(website)    //this will gernrate a error because website is local to other if statement
}

// console.log(username)    //this will also generate a errro beacuse username is local to if statement



// ******************************** interesting *********************************
function addone(num){       //this is function
    return num+1
}
console.log(addone(5))

const addtwo=function(num){   //this is also called expresion
    return num+2
}
console.log(addtwo(5))   //but this should be called after declaration not before

