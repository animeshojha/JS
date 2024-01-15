const myarray=[0,1,2,3,4];
const heros=["batman" ,"ezsnippet"];
const number=new Array(5,6,7,8,9);
// console.log(myarray)
// console.log(heros);
// console.log(number);

// array methods.......................................................
number.push(7);
number.push(62);
number.pop();
number.unshift(0);
number.shift()
console.log(number);
// console.log(number.includes(12));
// console.log(number.sort())
console.log(number.slice(1,4));
let n=number.join()  // join converts the array into string
// console.log(n); 
console.log(number.splice(0 , 2))