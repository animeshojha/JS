// let name="animesh";
let age=23;

//console.log("hello "+ name); // outdated

//console.log(`hello my name is ${name} and my age is: ${age}`);
const name=new String('animesh');
console.log(name);
console.log(typeof name);
console.log(name[0]);
console.log(name.length)
console.log(name.toUpperCase()) // original value will not be changed
console.log(name.charAt(1));
console.log(name.indexOf('a'))
// console.log(name.substring(0,4));
name1="animesh";
const another=name1.slice(-7,-4);
console.log(another);
const name2="  animesh  ";
console.log(name2);
console.log(name2.trim());
const url="https://www.google.com";
console.log(url.replace('google','instagram'));
console.log(url.includes('a'))
let name4="animesh-ojha-deepu";
console.log(name4.split('-'));
