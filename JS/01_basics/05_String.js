const name = "hello"
const count =  20

// console.log(name +  count);  // not prefered to write

console.log(`The message is ${name} and count is ${count}`);

const gamename = new String('Abhishek-KK-com') 

// console.log(gamename[2]);
// console.log(gamename.__proto__);

// console.log(gamename.length);
// console.log(gamename.toUpperCase());
console.log(gamename.charAt(4));
console.log(gamename.indexOf('b'));

// substring cant take negative values as like slice
const newgamename = gamename.substring(0 , 3)
console.log(newgamename);


const anothergame = gamename.slice(-9, 6)
console.log(anothergame);

const newgame = "   abhisek   "
console.log(newgame);
console.log(newgame.trim());

const url = "https://hello.com/hello%20world"


console.log(url.replace('%20', '-'));
console.log(url.includes('abhi'));

console.log(gamename.split('-',1));







