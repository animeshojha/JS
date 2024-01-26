function multiplyby5(num){
    return num*5;
}
multiplyby5.power=2;
console.log(multiplyby5(4));
console.log(multiplyby5.power);

function createuser(username,value){
    this.username=username;
    this.value=value;
}
createuser.prototype.increament=function(){
    this.value++;
}
createuser.prototype.printme=function(){
    console.log(`score is ${this.value}`);
}
const userone= new createuser("chai", 25);
const usertwo= new createuser("tea", 250);
userone.printme();
// Original value of Math.PI
console.log(Math.PI);  // Output: 3.141592653589793

// Overwrite Math.PI with a different value
Math.PI = 4; 

// Now, Math.PI has the new value
console.log(Math.PI);  // Output: 4