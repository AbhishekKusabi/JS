// singelton --> when an object is made with constructor

// Object.create

// object literals

// this is an object   const Jsuser = {}    

const mySym = Symbol("key1")

const Jsuser = {
    name : "Abhi",
    "FullName":"Abhishek Kusabi",
    // mySym:"mykey1",// this is wrong
    [mySym]:"mykey1",
    age :21,
    location: "Jaipur",
    email: "abcd@hsa.com",
    isLoggedin: false
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser.FullName);
// console.log(Jsuser[mySym]);

// Jsuser.email="abhi@gmail.com"
console.log(Jsuser["email"]);

Object.freeze(Jsuser)

Jsuser.email="abhi@gmail21312.com"

console.log(Jsuser["email"]);
