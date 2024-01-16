// singelton method -> created by  using constructor
// object.create


// object literals
// creating a symbol
const sym=Symbol("sym1")
const jsuser={
    name:"animesh",
    "full name":"animesh ojha",
    [sym]:"mysym1", // created a symbol in a object 
    age:18,
    location:"Gwalior",
    email:"animeshojha44@gmail.com",
    isloggedin:false,
    loginday:["monday","friday"]
}
console.log(jsuser.name);
console.log(jsuser["full name"]);
console.log(jsuser[sym]);

jsuser.name="deepu" ; // name changed

//Object.freeze(jsuser) /// there will not be any chanegs now in tha object keys and value 

jsuser.greeting=function(){
    console.log("hello js user");
}
jsuser.greetingtwo=function(){
    console.log(`hello js user ,${this["full name"]}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo())