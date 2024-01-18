let num=[1,2,3]
// let ans=num.reduce(function(acc,sum){
//     console.log(`acc: ${acc} , sum: ${sum}`);
//     return acc+sum;
// },0)
// console.log(ans);

//let ans=num.reduce((acc,sum)=>acc+sum ,0)
//console.log(ans);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

let ans=shoppingCart.reduce((acc,sum)=>acc+sum.price,0)
console.log(ans);