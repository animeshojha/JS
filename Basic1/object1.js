// const tinderuser=new Object(); // singelton object
// console.log(tinderuser);


const tinderuser={};  // non singelton object
tinderuser.name="animesh"
tinderuser.age=18;
tinderuser.isloggedin=false;
//  console.log(tinderuser);

const regularuser={
    email:"animeshojha44@gmail.com",
    name:{
    fullname:{
        firstname:"animesh",
        lastname:"ojha"
    }
    }
}
//console.log(regularuser.name)
//console.log(regularuser.name.fullname);
//console.log(regularuser.name.fullname.firstname);

const ob1={
    1:"a",
    2:"b"
};
const ob2={
    3:"c",
    4:"d"
}

const obj3={ob1 , ob2};
//console.log(obj3);
const obj4=Object.assign({},ob1 ,ob2);
//console.log(obj4);
////console.log("combining objects by spread operators");
const obj5={...ob1 , ...ob2};
//console.log(obj5);

// when user comes from database it is in the form of arrray of objects

const users=[
    {
        id:1,
        email:"...@gmail.com"

    },
    {
        id:1,
        email:"...@gmail.com"

    },
    {
        id:1,
        email:"...@gmail.com"

    },
    {
        id:1,
        email:"...@gmail.com"

    }
]

//console.log(users[1].email);
// console.log(tinderuser);
// console.log(Object.keys(tinderuser));// return all the keys in a array form 
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty('age'));

const course={
    coursename:"chai aur code js",
    price:555,
    courseinstructor:"hitesh sir"
};
console.log(course.courseinstructor);
const{courseinstructor:c}=course;  // courseinstructor changed to c
console.log(c);