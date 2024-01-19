// For loop


for(let i=1;i<11;i++){
    console.log(`${2} * ${i} = `+2*i);
}


// Pattern
// *
// **
// ***
// ****
for (let i = 1; i <= 4; i++) {
    let asterisks = '';
    for (let j = 1; j <= i; j++) {
        asterisks += '* ';
    }
    console.log(asterisks);
}

// tables from 1 to 10
for(let i=0;i<=10;i++){
    console.log(`table of value is ${i}`)
    for(let j=0;j<=10;j++){
        console.log(`${i} * ${j} = `+i*j);
    }
}