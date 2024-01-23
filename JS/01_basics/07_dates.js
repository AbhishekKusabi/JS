// Dates

let myDate = new Date()
console.log(myDate);
// console.log(`The out of toString method is: ${myDate.toString()}`);
// console.log(`The output from ISO string is : ${myDate.toISOString()}`);
// console.log(myDate.toUTCString);
// console.log(`The output of getTime is : ${myDate.getTime()}`);
// console.log(`The output of toJSON is : ${myDate.toJSON()}`);
// console.log(`The output of toUTCString is : ${myDate.toUTCString()}`);
// console.log( `The output of toLocaleDateString is: ${myDate.toLocaleDateString()}`);
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.getTimezoneOffset());


// let myCreatedDate = new Date(2024,12,27)
// let myCreatedDate = new Date(2024,12,27,5,3)


let myCreatedDate = new Date("01-06-2024")
// console.log(myCreatedDate.toLocaleString());

let Mytime = new Date();


// console.log(Mytime);
// console.log(myCreatedDate.getTime());
// console.log(Mytime.getMonth());
// console.log(Mytime.getDay());


Mytime.toLocaleString('default', {
    weekday :"long",
    
})