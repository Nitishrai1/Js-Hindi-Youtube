// Imedeately invoked function is called IIFE

(function chai(){
    console.log(`DB connected`);
})();               //; is used to end the function


(()=>{
    console.log(`DB connected two`);
})();                  //; should be used to terminate the IIFE function

// Two pass a name
((name)=>{
    console.log(`DB connected two ${name}`);
})(`nitish`)