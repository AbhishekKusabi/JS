const score = 400

// (or)  
// this is another way to declare an variable by specifiying the datatype for which the syntax is below

const bal = new Number(400)

// console.log(score);
// console.log(bal);

// console.log(bal.toString().length);
// console.log(bal.toFixed(2));

const otherno = 23.4567

// console.log(otherno.toPrecision(3));

const num = 1000000

// console.log(num.toLocaleString('en-IN'));



// **************************** Maths ***********************************

// console.log(Math.abs(-4));
// console.log(Math.round(4.56));

// floor takes lowest value and ceil takes upper value (all time)
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));

// console.log(Math.sqrt(16));

// console.log(Math.max(2,4,7,8,10));

// Math.random() always gives value between 0 and 1
console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min ));