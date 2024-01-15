// Dates

let mydate=new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());


// let mycreatedDate=new Date(2024,0,15);
// let mycreatedDate=new Date(2024,0,15,5,3);
// let mycreatedDate=new Date("2023-010-14");
let mycreatedDate=new Date("01-14-2023");

// console.log(mycreatedDate.toLocaleString());

// Time stamps
let mytimestamp=Date.now()
// console.log(mytimestamp)
// console.log(mycreatedDate.getTime());    //milisecond
// to convert it into seconds
// console.log(Math.floor(Date.now()/1000));


let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth());       //Month start from  0 to 11
console.log(newDate.getDay());

// Customizoing the localeString
newDate.toLocaleString('default',{
    weekday: "long",  //display the weekday in full for like monday
    timeZone: "spaces"
    
})