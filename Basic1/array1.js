const heros=["thor" ,"ironman","spiderman" ];
const dc_heros=["superman","flash","batman"];
// heros.push(dc_heros)

// console.log(heros);
// console.log(heros[3][1]);

// const name=heros.concat(dc_heros)
const name=[...heros ,...dc_heros]
console.log(name);

const arr1=[1,2,[3,4],5,6,[6,7,[7,8]]];
const arr2=arr1.flat(1);
console.log(arr2);
const name1="animesh";
console.log(Array.isArray(name1));
console.log(Array.from(name1))
console.log(Array.from({name:name1})); // interesting.......... we will have to clarify what we want to convert in the array

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));