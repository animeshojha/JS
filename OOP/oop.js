const detail={
    name:"animesh",
    age:22,
    login:"yes",
    getuser:function(){
    console.log("this is a function");
    console.log(`username is: ${this.name}`);
    console.log(this);
    }
}
// console.log(detail.age);
// console.log(detail.getuser());
// console.log(this);

function user(username,age,islogggedin){
    this.username=username;
    this.age=age;
    this.islogggedin=islogggedin
   // return this;             // implicitly return is available 

   this.greeting=function(){
    console.log(`hello ${this.username}`);
   }
}
const userone=new user("animesh", 22,true);
const usertwo=new user("animesh ojha", 19, false)
console.log(userone);
console.log(usertwo.greeting());