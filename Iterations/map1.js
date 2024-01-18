const nums=[1,2,3,4,5,6,7,8,9,10]

// let ans=nums.map((n)=>n+10)
// console.log(ans);

let ans=nums
       .map((num)=>num+10)
       .map((num)=>num*4)
       .filter((num)=>num>40)

       console.log(ans);