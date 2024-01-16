function myname(){
    console.log("A")
    console.log("n")
    console.log("i")
    console.log("m")
    console.log("e")
    console.log("s")
    console.log("h")
}

// myname()   // execution of a function

// function addtwonumbers(a,b){
//     console.log(a+b);
// }
// let ans=addtwonumbers(4,5)
// console.log(ans);

function add(a,b){
    return a+b;
}

// console.log((add(2,3)));
function checklogin(username){
    if(username===undefined){
       console.log("please enter username");
       return;
    }
   
    return `${username} just logged in`;
   
}
//console.log(checklogin());

function name(name="deepu"){
    return `my name is : ${name}`
}
//console.log(name()); // it will print deepu
//console.log(name("animesh")); // it will overwrite deepu and will print animesh

// multiple arguments.....

function calculatesum(...num){
    return num;
}
//console.log(calculatesum(1,2,3,4,5,6));

const user={
    username:"animesh",
    price:999
};

function handlingobj(anyobject){
    console.log(`hello , username is: ${anyobject.username} and price is: ${anyobject.price}`);
}

handlingobj(user)  // by passing any object as arguments
handlingobj({      // by creating a object
    username:"deepu",
    price:1234
})

const array=[1,2,3,4,5];

function printarray(anyarray, n){
    console.log(`the 2nd element of array is: ${anyarray[n]}`);
}
printarray(array, 2)