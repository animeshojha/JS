console.log("in this we will leran about datatypes");
// alert can be used in this because we r using node js not any browser
console.log("hello animesh");
let name="animesh"
console.log(typeof name);
let age=12;
console.log(typeof (age));
let ans=true;
console.log(typeof ans);
// types of null will be a object 
console.log(typeof null);
// type of undefined will be undefined
console.log(typeof undefined);

// summary/.............................................

 /*
 there are two types  of datatypes in js
 1. premitive -> number , boolean, string, null , undefined , bigint , symbol ( a copy will be made for changes)
     ->> also known as value type
 2. non-premitive -> array , object , function (changes will be in the original)
     ->> also known as reference type

  js is dynamically typed languages where the interpreter assigns variable a type at the runtime according to the
  variables value at that time   
 */

// symbol used for uniqnesss

let a=Symbol("123");
let b=Symbol("123");
console.log(a==b);
console.log(a===b);
console.log(typeof a);
console.log(b);

// array
const name1=["animesh" , "deepu", "ABCDE"];
// object
let myobj={
    name:"animesh",
    age:12,
    college:"itm"
};

const myfunction=function(){
    console.log("i am function");
}

console.log(typeof name1);
console.log(typeof myobj);
console.log(typeof myfunction);

let bigint=25423432n;
console.log(typeof bigint);