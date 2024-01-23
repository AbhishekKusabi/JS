//  Primitive
// 7 types: String , Number, Boolean, null, undefined, Symbol, BigInt

//Symbol => used to make an element unique

const value =100.3
const isLoggedIn =false

let useremail; // its assigned as undefiined
const bigNo = 12345678912344567656545674345778n  // we write n at last to represent bigInt
 
const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

//Reference (Non Primitive)
// Array, Objects, Functions

const hero = ["sdfsd", "sdfwf", "htjtg"] // array
// objects
let myObj ={
    name:"abhi",
    age:21,
}

//Functions
 const myfxn= function(){
    // console.log("Hello");
 }

//  console.log(typeof id);
//  console.log(typeof useremail);
//  console.log(typeof isLoggedIn);
//  console.log(typeof value);






 // ********************** Memory **********************************8

// stack, heap
// Stack => primitive ------  Heap => non-primitive

let name = " AbhishekKusabi"

let anothername = name

anothername = " Aadhu"
console.log(anothername);

let userone = {
    email: " najdn@google.com",
    upi: "user@ybl"
}

let usertwo = userone

usertwo.email  = " abhishek@google.com"

console.log(userone.email);
console.log(usertwo.email);


// in stack the  memory is nor shared instead an copy is made when element is copied to another 
// let name = " AbhishekKusabi"
// let anothername = name
// anothername = " Aadhu"

// where as in heap the same memories data is referenced hence change in one var will change original value too
// let userone = {
//     email: " najdn@google.com",
//     upi: "user@ybl"
// }

// let usertwo = userone

// usertwo.email  = " abhishek@google.com"










