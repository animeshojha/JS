// there are two types of memory allocation in js
/*
1. stack => it stores all the premitive dataypes
2. heap => it sotres all the non-premitive datatypes

 in the stack memory alllocation all the changes will be happen in the copy of that value
 in heap memory allocation all the changes will be in the original value
*/

let name="deepu";
let name1=name;
console.log(name);
console.log(name1);

let detail={
    name:"animeshojha",
    age:21
};
let detail1=detail;
detail1.age=23;
console.log(detail.age);