//Use a for loop to print all even numbers from 1 to 50.
for (let i = 1; i < 50; i++) {
	if (i % 2 == 0) { console.log(`even ${i}`) }
}



//Q2. Multiplication Table
//Print the multiplication table of 7 using a for loop


for (let i = 1; i <= 10; i++) {
	console.log(`7 x ${i} = ${7 * i}`)
}

//Find the sum of numbers from 1 to 100 using a loop.

let sum = 0;

for (let i = 1; i <= 100; i++) {
	sum = sum + i;

}
console.log(sum)


//Q4. Array Operations
//Create an array of 5 student names and:
//● Display all names using for...of
//● Add a new student using push()
//● Remove the last student using pop()

const names = ["nitesh", "karan", "mitesh", 'prachi', "palak"]

for (let name of names) {
	console.log(name)
}

names.push("anish")

names.pop()


/*Q5. Object Operations
Create an object:
{
name: "Rahul",
age: 21,
//city: "Delhi"
//}
//● Display all keys using for...in
//● Display all values
*/

const userDetails = {
	name: "Rahul",
	age: 21,
	city: "Delhi"
}

for (let keys in userDetails) {
	console.log(keys)
	//console.log(userDetails[keys])
}


for (let keys in userDetails) {
	//console.log(keys)
	console.log(userDetails[keys])
}

/*Q5. Function
Create a function calculateSquare() that returns the square of a number
*/
function calculateSquare(num) {
	return num * num;
}

console.log(calculateSquare(4))

/*
Q6. Arrow Function
Create an arrow function that checks whether a number is even or odd.
*/


const cheakOddEven = num => num % 2 == 0 ? console.log("even") : console.log("odd")

cheakOddEven(5)



/*
Q7. String Methods
Take a string "JavaScript Programming" and:
● Convert it to uppercase
● Convert it to lowercase
● Find its length
● Check whether it contains "Script"*/


const stringMethods = (str) => {

	let upperCase = str.toUpperCase()
	let lowerCase = str.toLowerCase()
	let length = str.length
	let ans = str.includes("Script") ? true : false
	return { upperCase, lowerCase, length, ans }
}

console.log(stringMethods("nitesh"))


//  Q8. Array Methods
// Create an array:
// [10, 20, 30, 40, 50]
// Use:
// ● map() to double each value
// ● filter() to get values greater than 25


let arr = [10, 20, 30, 40, 50]

console.log(`double values of array are : ${arr.map(n => n * 2)}`)

console.log(`values greater than 25 : ${arr.filter(n => n > 25)}`)


//Q9. Student Result System
// Create an array of student marks:
// [85, 45, 92, 30, 67]
// Display only passing marks (≥ 40) using filter().

let studentMarks = [85, 45, 92, 30, 67]
console.log(`Passing marks ${studentMarks.filter(n => n >= 40)}`)



// Q10. Student Management System
/// Create an array of student objects:
// [
// { id: 1, name: "Aman", marks: 80 },
// { id: 2, name: "Priya", marks: 95 },
// { id: 3, name: "Rohit", marks: 60 }

// ]
// Perform the following:
// 1. Display all students.
// 2. Display students with marks greater than 75.
// 3. Display only student names using map().
// 4. Calculate total marks using a loop.


let studentsData = [
	{ id: 1, name: "Aman", marks: 80 },
	{ id: 2, name: "Priya", marks: 95 },
	{ id: 3, name: "Rohit", marks: 60 }
]


// 1. Display all students.
studentsData.forEach(e => console.log(e["name"]))


// / 2. Display students with marks greater than 75.

console.log(`students with marks greater than 75 are =>${studentsData.filter(e => e.marks > 75).map(e => e.name)}`)

// 3. Display only student names using map().

console.log(`Students name =>${studentsData.map(e => e.name)}`)


// 4. Calculate total marks using a loop.

function calculateTotalMarks(studentsDataJson) {
	let totalMarks = 0;
	for (let studentData of studentsDataJson) {
		totalMarks += studentData["marks"]
	}
	return totalMarks;
}

console.log(calculateTotalMarks(studentsData))
