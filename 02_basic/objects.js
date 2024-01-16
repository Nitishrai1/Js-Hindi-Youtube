// singleton: it is a single object 

// object literals
// Object.create constructor

// Declaring symbol and define in object and print
const mysym=Symbol("key1")
//Objects Literals
const JsUser={  //it have key value pair
    name:"Nitish",
    "full name":"Nitish Rai",
    sec:"K22LL",
    course:"B.TECH",
    [mysym]:"mykey1",
    age:21,
    email:"nitishraigkp007@gmail.com"

}

// To acces the data of object
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysym]);

// Changing the value of object
JsUser.email="nitishraigkp008@gmail.com"
// Object.freeze(JsUser)  //it freazz the object and not update can be done now
 
// Decalreing a greeting function
JsUser.greeting=function(){
    console.log(`Hello js user ${this.name}`);
}
console.log(JsUser.greeting());

