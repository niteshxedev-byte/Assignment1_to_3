// Q1. Create an array of 5 numbers and:
// ● Display the total number of elements.
// ● Display the first and last element.

let numbers = [10, 20, 30, 40, 50];
let numbers_2 = [1, 2, 3, 4, 5];
function findSum(arr) {
    let n = numbers.length

    return (n / 2) * (arr[0] + arr[n - 1]);
}

console.log(findSum(numbers))
console.log(findSum(numbers_2))

function printFirstLastElement(arr) {
    console.log(arr[0])
    console.log(arr[arr.length - 1])
}

printFirstLastElement(numbers)
printFirstLastElement(numbers_2)

 
// Q2. Create an array of 5 movie names and reverse the array using an array method.

const movies = [
    "Inception",
    "The Matrix",
    "Interstellar",
    "The Dark Knight",
    "Dune"
];
console.log(movies)
const reverseARR = movies.map((value, idx) => {
    return movies[movies.length - 1 - idx]
})

console.log(reverseARR)

console.log(movies.reverse())


// Create an array: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
// Extract the last 3 elements into a new array.

const arr =["HTML", "CSS", "JavaScript", "React", "Node.js"]
const [a,b,c] = arr

const newArr = [a,b,c]
console.log(newArr)


// method_2
console.log(arr.slice(0,3))

// Q4. Create an array: ["Red", "Green", "Blue", "Yellow"]
// Insert "Black" between "Green" and "Blue" using an array method.

let colors = ["Red", "Green", "Blue", "Yellow"]

colors.splice(2,0,"Black")
console.log(colors)



// Q5. Create an array: ["Pen", "Pencil", "Eraser", "Scale"]
// Remove "Eraser" from the array using an array method.

const products =["Pen", "Pencil", "Eraser", "Scale"]


products.splice(2,1)
console.log(products)


// Q6. Create an array of 5 mobile brands and sort them alphabetically.

const mobileBrands = ["Apple", "Samsung", "Vivo", "Xiaomi", "Motorola"];

mobileBrands.sort()
console.log(mobileBrands)


// Q7. Create an array: [10, 20, 30, 40, 50]
// Convert the array into a string separated by " - ".


let numArr = [10, 20, 30, 40, 50]


console.log(numArr.join("-"))



// Q8. Create an array: ["Delhi", "Mumbai", "Chennai", "Kolkata"]
// Check whether "Pune" exists in the array.

const cityArry =["Delhi", "Mumbai", "Chennai", "Kolkata"]

console.log(cityArry.includes((c)=>{
    return c == "Pune"
}) ? "exist":"not exits")

// Q9. Create an array of 8 numbers and display only the first 5 elements using an array method.

let numbers_3 = [10, 20, 30, 40, 50, 60, 70, 80];

console.log(numbers_3.slice(0,5))


// Q10. Create an array: ["A", "B", "C", "D", "E"]
// Extract elements from index 1 to index 3 into a new array.

const alphabetsArr =["A", "B", "C", "D", "E"];

console.log(alphabetsArr.slice(1,4

))


// Q11. Create a string:
// let text = "JavaScript Programming";
// Find the total number of characters.


let text = "JavaScript Programming"
console.log(text.length)



// Q12. Create a string:
// let text = "frontend developer";
// Convert the entire string to uppercase.

let text1= "frontend developer";
console.log(text1.toUpperCase())


// Q13.
// Create a string:
// let text = "BACKEND DEVELOPMENT";

// Convert the entire string to lowercase.


let text3 = "BACKEND DEVELOPMENT";

console.log( text3.toLowerCase())


// Q14.
// Create a string:
// let text = "Welcome to React";

// Check whether the word "React" exists in the string.

text = "Welcome to React";
console.log(text.includes("React")? 'exists':"not exists")


// Q15.
// Create a string:
// let text = "I love HTML";

// Replace "HTML" with "JavaScript".

text = "I love HTML"

console.log(text.replace("HTML","JavaScript"))


// Q16.
// Create a string:
// let text = "MERN Stack Development";

// Extract the word "Stack" using slice().

text = "MERN Stack Development";
console.log(text.slice(5,10))



// Create a string:
// let text = "HTML,CSS,JavaScript,React";
// 
// Convert the string into an array using split().

 text = "HTML,CSS,JavaScript,React";
 console.log(text.split(","))



//  Q18.// Create a string:
// let text = " Hello Students ";
// Remove the extra spaces from both sides.

text = " Hello Students ";


console.log(text.trim())


// Q19.Create a string:
// let email = "student@gnauniversity.edu.in";
// Check whether the email contains "@gmail.com".


let email = "student@gnauniversity.edu.in";

console.log(email.includes("@gmail.com",0) ? "vaild email ":"invalid email")



// Q20. Create an array:
// ["HTML", "CSS", "JavaScript"]
// Perform the following operations:
// 1. Add "React" at the end.
// 2. Remove the first element.
// 3. Convert the final array into a string using join().
// 4. Check whether "JavaScript" exists in the array.


let technologiesArr = ["HTML", "CSS", "JavaScript"]

// 1. Add "React" at the end.
technologiesArr.push("React")
console.log(technologiesArr)

//2 Remove the first element.
technologiesArr.pop()
console.log(technologiesArr)

// 4. Check whether "JavaScript" exists in the array.


console.log(technologiesArr.includes("JavaScript") ?"exist":"not exits")

// 3. Convert the final array into a string using join().
console.log(technologiesArr.join())

