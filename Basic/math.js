let number=new Number(68);
// console.log(number);
// console.log(typeof(number.toString()));
let ans=102.2;
// console.log(ans.toFixed(2))
const n=13.9;
// console.log(n.toPrecision(4))

let m=123123123;
// console.log(m.toLocaleString('en-IN'))

// maths.........................................................................
  console.log(Math);
  console.log(Math.abs(-3))
  console.log(Math.round(-3.6))
  console.log(Math.ceil(4.00001))
  console.log(Math.pow(4,2));
  console.log(Math.min(1,4,6,8,-1))
  console.log(Math.max(1,2,3,4,5,56,6))
  console.log(Math.round(Math.random(4)*100));

// generating the random values between two numbers
 
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1)+min))