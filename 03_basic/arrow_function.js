// Arrow functions ans this keyward

const user={
    username:"Nitish",
    age:18,
    price:199,
    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`);
        // console.log(this);   //this will show all the details of object
    }

}
// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()

// console.log(this);        //this refer to empty object

// this : it is used in the object not in the function

// Arrow function
const chai = () =>{
    let username="Nitish"
    // console.log(this);// this will also be null value
}

chai()

// Arrow fucntion

const addtwo=(num1,num2)=>{
    return num1+num2
}
// console.log(addtwo(2,6));

// Implicit return : in this we remove the currley bresis but not perenthisis and return keyward
const addthree=(num1,num2,num3)=>num1+num2+num3
console.log(addthree(2,9,10));

// object
const obj=()=>({username:"nitish"})
console.log(obj());



