for(let i=0;i<10;i++){
 //   console.log(i);
}
let arr=[3,4,5]
//console.log(arr.length);
for(let i=1;i<=10;i++){
    for(let j=1;j<=10;j++){
       // console.log(i + `*` + j + `=` + i*j);
    }
   //
   // console.log("    \n");
}

let myarray=[1,2,3,4,5];
for(let i=0;i<myarray.length;i++){
    console.log(myarray[i]);
}

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}