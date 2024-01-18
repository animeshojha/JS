// for of loop 

let arr=[1,2,3,4,5]
for (const i of arr) {
    //console.log(i);
}


const greeting="hello world!"
for(let i of greeting){
    //console.log(i);
}

// maps

const map = new Map()
map.set('IN', "India")
map.set('IN', "India")
map.set('IN', "India")  // map will not store repeation of the values
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

//console.log(map);
for(const [key,value] of map){
   // console.log(key  ,`;_`, value);
}

// const myobj={
//     name:"animesh",   // obj is not iterable  
//     dob:2002
// }
// for(const [key,value] of myobj){
//    // console.log(key , ':-' , value);
// }

// iterations for objects ....

const myobj = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for(key in myobj){
    // console.log(key);
    // console.log(myobj[key])
   // console.log(`${key} : has value ${myobj[key]}`);
}

let array=["java" , "cpp", "python","js"]
for (let i in array){   // index will beb print
    //console.log(array[i]);
}

let map1=new Map();
map.set(1, "animesh");
map.set(2,"deepu")
for(let key in map1){
   // console.log(map[key]);
}


// for - each loops...........................................................

const coding=["java","python","cpp"];
// coding.forEach(function(value){
//     console.log(value);
// })

// coding.forEach((value)=>{
//     console.log(value);
// })

coding.forEach((value, index, array)=>{
   // console.log(value , index, array);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach((value=>{
    // console.log(value.languageName);
    // console.log(value.languageFileName)
    console.log(`language name is ${value.languageName} and languagefile name is ${value.languageFileName}`)
}))