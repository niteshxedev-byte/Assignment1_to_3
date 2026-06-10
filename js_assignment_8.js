// 1. Double the Numbers for the given array: let arr = [2, 4, 6, 8];

let arr = [2, 4, 6, 8]

let newarr = arr.map((element)=>{
    return element*2
})
console.log(newarr)


// 2. Filter Odd Numbers: let nums = [1,2,3,4,5,6]

let nums = [1,2,3,4,5,6]

let filterd =nums.filter((val,idx)=>{
    if(val%2==0){     
    }else{
        return val
    }
})
console.log(filterd)


// 3. Product of Array: let numbers = [10, 20, 30, 40];

 let numbers = [10, 20, 30, 40];
 let Product = 1;
numbers.forEach((val,idx)=>{
   
   Product = Product * val
       
})
 console.log( Product )



//  4. Get names of users: let users = [
//   {id: 1, name: "Aman"},
//   {id: 2, name: "Sita"},
//   {id: 3, name: "Rahul"}


 let users = [
  {id: 1, name: "Aman"},
  {id: 2, name: "Sita"},
  {id: 3, name: "Rahul"}]


 let userArr = users.map((val,idx)=>{
    return `The userName is ${val.name} and index is ${val.id}`
  })


 userArr.forEach((val)=>{
    console.log(val)
 })

//  5. Check All Positive: let nums = [2, 5, 8, 10];


let nums1 = [2, 5, 8, 10,0];



nums1.forEach((val,idx)=>{
        if(val>0){
            console.log( `The number ${val} on index ${idx} is postive`)
        }
        else if(val<0){
            console.log( `The number ${val} on index ${idx} is negitive`)
        }
        else{
              console.log( `The number ${val} on index ${idx} is zero`) 
        }
})



// 6. let cart = [
//   {name: "Shirt", price: 500},
//   {name: "Jeans", price: 1200},
//   {name: "Shoes", price: 2000}
// ];
// Calculate total price using reduce().


let cart = [
  {name: "Shirt", price: 500},
  {name: "Jeans", price: 1200},
  {name: "Shoes", price: 2000}
];


let total = cart.reduce((acc,items)=>{
  return(acc + items.price)
},0)
console.log(total)