// Object Singleton
const tinderuser=new Object()
// console.log(tinderuser);
tinderuser.id="123abc"
tinderuser.name="Nitish"
tinderuser.isloggedin=false
// console.log(tinderuser);
const regularuser={
    email:"Sum@gmail.com",
    fullname:{
        usersname:{
            firstname:"nitish",
            lastname:"rai"
        }
    }
}
// console.log(regularuser);

// console.log(regularuser.fullname.usersname.firstname);

const obj1={1:"a",2:"b"}
const obj2={5:"p",6:"l"}
const obj4={2:"a",0:"b"}

// const obj3=Object.assign({},obj1,obj2,obj4)   // in this object the values will be inserted into sorted order
const obj3={...obj1,...obj2,...obj4}
console.log(obj3);


const users=[
    {
        id:1,
        email:"n@gmail.com"
    },
    {
        id:1,
        email:"n@gmail.com"
    },{
        id:1,
        email:"n@gmail.com"
    },
]
// To acces the object first email
users[1].email

// console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));

// Enteries
console.log(Object.entries(tinderuser));   //this will convert the key bvalue into small arrays

// To find the value
console.log(tinderuser.hasOwnProperty('isloggedin'));




