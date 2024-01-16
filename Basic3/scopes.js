let a=1;
const b=2;
var c=3;
// console.log(a);
// console.log(b);
// console.log(c);

if(true){
    let d=1;
    const e=2;
     var f=3;
}
//console.log(d);
//console.log(e);
//console.log(f); // f can be access because it has flobal scope

// scopes in nested functions

function one(){
    username="animesh"
    function two(){
        website="youtube"
        console.log(username);
    }
    //console.log(website);
   // two();
}
one()

function addone(num){    // function
    return num+1;
}
const addtwo=function(num){   // expresiion 
    return num+2;
}
console.log(addone(3));
console.log(addtwo(3));