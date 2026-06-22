// 1. Create an array of 5 student names and use: 
// (i) map() with arrow function
// (ii) Display output as: "Hello, User!"


let nameArray = ["Nitesh", "Anish", "Rahul", "Priya", "Amit"];

nameArray.map((value)=>console.log(`Hello, ${value}!`))


 const user = {
  name: "xyz",
  age: 21,
  course: "Bca"
};

const {name, age, course} = user
console.log(name, age, course)

const newobj = {...user,city:"panipat"}
console.log(newobj);


// Create a function sumAll() that accepts unlimited numbers and returns their sum.


function sumAll(... num){
    let sum = 0 ;
    num.map(value=> sum= sum +value )
    return sum;
}
console.log(sumAll(2,4,6,3))



async function getData() {
  let data =  await fetch(" https://jsonplaceholder.typicode.com/users")
   let dataJson = await data.json()
   console.log(dataJson.filter(element =>{ 
    if (element.id <=3 ){ return element }
}))
}
getData() 



let loadData = (getData = true)=>{
    return new Promise((res,rej)=>{
setTimeout(()=>{
    if(getData){
        res("data loaded ")
    }
    else{
       rej("error") 
    }
},2000)
 })}


loadData(true)
    .then((res)=>console.log(res))
    .catch((rej=>console.log(rej)))


loadData(false)
    .then((res)=>console.log(res))
    .catch((rej=>console.log(rej)))





 const user1 = {
  id: 1,
  profile: {
    userName: "XYZm",
    address: {
      city: "Panipat",
      pin: 132103
    }
  }
};

// Extract: name, city, pin

const {profile:{userName,address:{city,pin}}} =user1;
console.log(userName,city,pin)

// 
// 7. Create a function that: (i) Takes first argument as name 
			//   (ii) Rest as marks 
			//  (iii) Returns total + average

function totalAvg(name,...marks){
    let lengthofmarks = marks.length
    let total = 0 
    console.log(lengthofmarks)
    marks.map(val =>total = total+val)
    
   return total + total/lengthofmarks;
}
console.log(totalAvg("",3,45))




function mockAPi(userName, password){
    return  new Promise(((res,rej)=>{

        setTimeout(()=>{

            if(userName!="Nitesh"){
                 rej(new Error("network eror"))
            }
            else if(password!="gf202215998"){
                rej(new Error("wrong_pwd"))
            }
            else{
                res("welcome user")
            }




        },2000)
    }))
}
  

async function fetchMockApi(userName, password) {
    
    try { 
        let response = await mockAPi(userName, password);
        console.log(response)
    }
    catch(error){
      if(error.message==="network eror"){
        console.log("network eror ")
      }
      if(error.message==="wrong_pwd"){
        console.log("password or username is wrong")
      }
    }
    
     finally {
   
    console.log("FINALLY: Hiding loading spinner");
  }
}


fetchMockApi("anish","panda")//network eror
fetchMockApi("Nitesh","panda")//password or username is wrong
fetchMockApi("Nitesh","gf202215998")//welcome user