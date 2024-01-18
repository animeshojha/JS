// const coding=["php","java","js","cpp"]

// const ans=coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })

// console.log(ans);  // for-each do not return any values
// for returning the values we use filter 


// const nums=[1,2,3,4,5,6,7,8,9,10]
// const ans=nums.filter((num)=> num>4)
// console.log(ans);

// const nums=[1,2,3,4,5,6,7,8,9,10]
// const ans=nums.filter((num)=> {  
//     return  num>4;
// })
// console.log(ans);


// const newnum=[];
// const nums=[1,2,3,4,5,6,7,8,9]
// nums.forEach((num)=>{
//     if(num>4){
//         newnum.push(num);
//     }
// })
// console.log(newnum)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let ans=books.filter((book)=>book.genre==="Science")
//console.log(ans)

let book=books.filter((book)=>{
   return book.publish>1995 && book.genre=="History"
});
console.log(book);