const promiseone=new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("asyn task is completed");
        resolve()
    }, 1000)
})

promiseone.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2 ");
        resolve();
    },1000)
}).then(function(){
    console.log("async task 2 resolved");
})

const promisethree=new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({name:"animesh" , email:"animeshojha44@gmail.com"})
    },1000)
})
promisethree.then(function(user){
console.log(user);
console.log(user.name);
})
const promisefour= new Promise(function(resolve, reject){
    setTimeout(function(){
       let error=true;
       if(!error){
        resolve({name:"animesh", password:"123"})
       }
       else{
        reject('error: something wrong')
       }
    },1000)
})

promisefour.then(function(user){
    console.log(user);
    return user.name
}).then(function(username){
    console.log((username));
}).catch(function(err){
    console.log(err);
}).finally(()=> console.log("the promise is either resolves or rejected"))


const prmosefive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({name:"js", pass:"123"});
        }
        else{
            reject("js went wrong");
        }
    },1000)
})

async function consumepromisefive(){
    try{
        const response=await prmosefive
        console.log(response);
    }
    catch(err){
        console.log(err);
    }
    
}
consumepromisefive()

// async function getallusers(){
//    try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data= await response.json();
//     console.log(data);
//    }
//    catch(error){
//    console.log("e:",error);
//    }
// }
//getallusers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    return data.id;
})
.then((id)=>{
    console.log(id);
})
.catch((e)=>{
    console.log(e);
})
 