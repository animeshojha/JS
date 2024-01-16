const user={
    username:"animesh",
    price:999,
    welcome:function(){
        console.log(`hello ${this.username} , welcome to the website`);
        console.log(this);
    }
}

// user.welcome()
// user.username="deepu"
// user.welcome()
// console.log(this);

// function chai(){
//     let username="animesh" 
//     console.log(this.username); // this is not used in functions
// }
// chai()

// let chai=function(){
//     let name="animesh"
//     console.log(this.username) // also not used in this type of function declaration 
// }

// chai()

// let chai=() =>{
//     let username ="animesh"
//     console.log(this.username)
// }
// chai()

// const addtwo=(num1,num2)=>{
//     return num1+num2;
// }
//

//const addtwo=(num1,num2)=> num1+num2;  //imlicit return 
const addtwo=(num1,num2)=> (num1+num2);  //imlicit return 

console.log(addtwo(4,5));

const obj=()=>({name:"animesh"})
console.log(obj())