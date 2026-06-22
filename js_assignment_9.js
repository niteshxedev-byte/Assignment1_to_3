//Q1. Rest & Spread Operator
//Create two arrays:
//const frontend = ["HTML", "CSS", "JavaScript"];
//const backend = ["Node.js", "Express.js", "MongoDB"];
//● Merge both arrays using the spread operator.
//● Add "React" at the beginning and "MERN" at the end.

const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express.js", "MongoDB"];

const fullStack = [...frontend , ...backend];
console.log(fullStack);

fullStack.push("MERN");
fullStack.unshift("React");

 console.log(fullStack);

/*Q2. Destructuring
Given:
const student = {
name: "Aman",
age: 21,
course: "BCA",
address: {
city: "Panipat",
state: "Haryana"
}
};
● Extract name and course.
● Extract city from the nested object.*/

const student = {
  name: "Aman",
  age: 21,
  course: "BCA",
   address: {
   city: "Panipat",
   state: "Haryana"
   }
  }

let {name,course}=  student ;

console.log(`Student name : ${name} and Course name is ${course}`);

// Extract city from the nested object.
let {address:{city}} = student
console.log(`The city of the Student is ${city}`)

/*Q3. Higher Order Functions
Create an array:
const marks = [45, 78, 90, 35, 60, 25, 85];
● Display only passing marks.
● Display marks greater than 80.
● Create a new array with 5 marks added to each student.
Use filter() and map().*/

const marks = [45, 78, 90, 35, 60, 25, 85];

console.log(`The Passing marks are ${marks.filter((value)=>{
  if(value>80){
    return value
  }
})}`)

marks.map((value,idx)=>{
    marks[idx]= value+5;
})
console.log(marks)


// Q4. Reduce Method
// Given:
// const prices = [500, 1200, 800, 300, 1500];

// Find:
// ● Total price
// ● Highest price
// ● Average price
// Using reduce().


const prices = [500, 1200, 800, 300, 1500];

let totalPrice = prices.reduce((sum,current)=>{
  return sum+current
},0)

console.log(`Total price in array is : ${totalPrice}`)

let highestPrice = prices.reduce((sum,current)=>{
  return sum<current ? current : ""
},0) 

console.log(`Highest Price in array is : ${highestPrice}`)

let averagePrice = prices.reduce((sum, current, idx, array) => {
  sum += current;
  
  // On the last item, divide the total sum by the array length
  if (idx === array.length - 1) {
    return sum / array.length;
  }
  
  return sum;
}, 0);

console.log(averagePrice);

// Q5. Closures
// Create a function:
// function counter() {
// // code
// }
// Every time the returned function is called, it should increase the count by 1.
// Example:
// const count = counter();
// count(); // 1
// count(); // 2
// count(); // 3



function counter() {
  let count = 0;
  function changeCount(){
    count++ 
    console.log(count)
  }

  return changeCount
}

let count =counter()
count()// 1
count()// 2
count()// 3

// The main calculator function
function calculate(num1, num2, callback) {
    return callback(num1, num2);
}

// Callback functions using normal function syntax
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Cannot divide by zero";
    }
}

// Testing the functions
console.log("Addition:", calculate(10, 5, add));          // Output: 15
console.log("Subtraction:", calculate(10, 5, subtract));    // Output: 5
console.log("Multiplication:", calculate(10, 5, multiply)); // Output: 50
console.log("Division:", calculate(10, 5, divide));         // Output: 2


// 1. Create the Promise
const loginPromise = new Promise((resolve, reject) => {
  const isLoginSuccessful = true; // Change to false to test the rejection case

  setTimeout(() => {
    if (isLoginSuccessful) {
      resolve("Login Successful");
    } else {
      reject("Invalid Credentials");
    }
  }, 2000);
});

// 2. Handle the Promise using .then() and .catch()
loginPromise
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
// Function wrapper to handle the asynchronous logic
async function handleLogin() {
  try {
    // Await the resolved value from the Q7 Promise
    const result = await checkLogin(true); 
    console.log(result); 
  } catch (error) {
    // Catch and handle the rejected error
    console.error(error); 
  }
}

// Execute the async function
handleLogin();
async function fetchUserData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    // Task 1: Display all users
    console.log("All Users:", users);

    // Task 2: Display only the first 5 users
    const firstFiveUsers = users.slice(0, 5);
    console.log("First 5 Users:", firstFiveUsers);

    // Task 3: Display only usernames
    const userNames = users.map(user => user.username);
    console.log("Usernames Only:", userNames);

  } catch (error) {
    console.error("Fetch Error:", error);
  }
}

fetchUserData();
// Define the user object
const user = {
  name: "Rahul",
  email: "rahul@gmail.com"
};

// 1. Store it in Local Storage (Must convert object to a JSON string)
localStorage.setItem("userProfile", JSON.stringify(user));
console.log("Data stored successfully.");

// 2. Retrieve it (Must parse JSON string back into an object)
const retrievedData = localStorage.getItem("userProfile");
const parsedUser = JSON.parse(retrievedData);
console.log("Retrieved Data:", parsedUser);

// 3. Delete it
localStorage.removeItem("userProfile");
console.log("Data deleted from Local Storage.");
