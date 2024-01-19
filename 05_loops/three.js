// Loops on array and objects   by using iterator
const arr=[1,2,45,6,7,8]
for (const i of arr) {
    // console.log(i);
    
}

// on string
const greetings="Hello world"
for (const i of greetings) {
    // console.log(i);
    
}

// Maps: it hold the key value pair in javascript
const map=new Map()
map.set('IN',"India")
map.set('USA',"United states os America")
map.set('Fr',"France")
// console.log(map);


// Applying loop on map
for (const i of map) {
    // console.log(i);
    
}
// or
for (const [key,value] of map) {
    // console.log(key,value);
    
}

// On object
const myobj={
    'game1':'NFS',
    'game2':'GTA',
    'game3':'freefire'
}
for (const i of map) {
    console.log(i);
    
}


