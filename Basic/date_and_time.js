let mydate=new Date();
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toJSON());
// console.log(mydate.toISOString())
// console.log(mydate.toLocaleTimeString())
// console.log(typeof mydate);

// declaring date

let Mydate=new Date(2024,0, 15, 5, 3);
// console.log(Mydate.toLocaleString());

let date=new Date("2024-01-15");
// console.log(date.toLocaleString());

let newdate=new Date("01-15-2024");
// console.log(newdate.toLocaleDateString());

let mytimestamp =Date.now();
console.log(Math.floor(Date.now()/(1000*60*60*24*30*12))); // years.

let date1=new Date();
console.log(date1);
console.log(date1.getDate());
console.log(date1.getDay());
console.log(date1.getFullYear());
console.log(date1.getMinutes());
console.log(date1.getMonth());

date1.toLocaleString('default' ,{
    weekday: "long",
    
});
console.log(date1)