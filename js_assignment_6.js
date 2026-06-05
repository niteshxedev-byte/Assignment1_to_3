//  Create an object named `student` with properties:



// * name
// * age
// * course
// * city

// Display all the properties.


const student = {
    name: "Nitesh Kumar Vashisht",
    age: 21,
    course: "MERN",
    city: "Mohali"
}

for(let i in student){
    console.log(`${i}: ${student[i]}`)
}



// Q2. Create an object named `car` with:
// * brand
// * model
// * year
// Display the brand using dot notation and model using bracket notation.


const car = {
    brand: "Tesla",
    model:"Y",
    year : 2022
}
console.log(car.brand)
console.log(car["model"])


// Q3. Create an object named `employee` with name and salary. Update the salary and display the updated object.
const employee ={
    name :"Nitesh",
    salary:"2,00,000"
}
employee.salary = "3,00,000"
console.log(employee)


// Q4 Create an object named `mobile` with brand and model. Add a new property `price` and display the object.

const mobile ={
    brand : "vivo",
    model : "y29"
}
mobile.price = "20,000"
console.log(mobile)


// Q5. Create an object named `book` with title, author, and pages. Delete the pages property and display the object.


const book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  pages: 310
};

delete book.pages

console.log(book)


// Q6. Create an object named `library` containing name, books, and location. Display all key-value pairs using a loop

const library = { 
  name: "State Central Library", 
  books: 500000, 
  location: "Sector 17, Chandigarh, India" 
}



for(let i in library){
    console.log(`${i}: ${library[i]}`)
}




// Q7. Create a nested object named `student` containing name, age, and address (city and state). Display all details.


const student1 ={
    name :"Nitesh",
    age :21,
address : {
  city: "Una",
  state: "Himachal Pradesh",
  pincode : "177211"
}

}
console.log(student1)


// Q8. Create an object named `laptop` containing name, brand, and price. Display all keys and all values separately.


const laptop ={
    name:"Victus", brand: "HP", price : "82,000"
}
for(let i in laptop){
    console.log(i)
}
for(let i in laptop){
    console.log(laptop[i])
}


// Q9. Create an object containing username and password. Check whether the property `username` exists in the object.


const userDetails = {
    userName : "niteshxe.dev",
    password :"nitesh@2024"
}
 console.log("userName" in userDetails ? "property  exits " : "property does not exits")


//  Q10. Create an array containing 3 student objects. Display the name of each student using a loop.

let arr = [
  { name: "Alice", age: 20, grade: "A" },
  { name: "Bob", age: 21, grade: "B" },
  { name: "Charlie", age: 19, grade: "A" }
];

arr.forEach(({name},idx)=>{
    console.log(name)
})



// Q11. Create an object named `employee` containing id, name, department, and salary. Display all details in a formatted way.

const employee1 = {
    id : "1",
    name : "Nitesh",
    department : ["web","agentic ai"],
    salary : "30,000"
}

for(let i in employee1){
    console.log(i ,":", employee1[i])
}


// Q12  Create a student report card object containing marks in HTML, CSS, and JavaScript. Calculate:
// * Total Marks
// * Average Marks
// * Result (Pass/Fail) based on the average marks.

const studentReport={
    HTML:40,
    CSS :39,
    JS:49,
}
let {HTML,CSS,JS} =studentReport
let totalMarks = HTML+CSS+JS

console.log(totalMarks)
console.log(totalMarks/3)

console.log(totalMarks/3>40 ? "pass":"fail")


// Q13. Create an array of 4 product objects containing: name, price
	// Display only the products whose price is greater than 1000.
    const products = [
  { name: "Laptop", price: 1000 },
  { name: "Smartphone", price: 6909 },
  { name: "Headphones", price: 149 },
  { name: "Mouse", price: 25}
];

products.forEach(({price},idx)=>{
    if(price>=1000){
      let  {name,price} = products[idx]
       console.log(name , price)
    }
})


// Q14. Create an object named college containing two nested objects: student, teacher
	// Display the student name and teacher name.
// 

const college12 = {
  student34: {
    name: "Rohan Sharma",
    id: "ST12345",
    course: "Computer Science"
  },
  teacher: {
    name: "Dr. Anjali Verma",
    id: "TCH987",
    department: "Engineering"
  }
};

let {student34,teacher} = college12

console.log(`Student name is : ${student34["name"]} , teacher name is : ${teacher["name"]} `)
