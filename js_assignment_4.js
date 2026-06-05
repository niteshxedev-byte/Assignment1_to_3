// Create an array of 5 fruits and add "Mango" at the end of array method 
const fruits = ["apple", "banana", "pineapple", "orange", "grape"];
fruits.push("mango")
console.log(fruits)



const colors = ["red", "blue", "green", "yellow", "purple"];
colors.pop()
console.log(colors)


const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
weekdays.unshift("sunday")
console.log(weekdays);


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
months.shift()
console.log(months)


const languages = ["JavaScript", "Python", "Java", "C++"];

console.log(languages.includes("JavaScript") ? "exits" :"not exits ")


const numberArray = [12, 50, 4, 32, 45, 21, 0, 19, 38, 41]


console.log(numberArray.findIndex((num)=>{return num ==50}))

// Creates a simple array of string names
const studentNames = ["Alice", "Bob", "Charlie", "David", "Emma"];

console.log(studentNames.toString())



const frontendBasics = ["HTML", "CSS"];
const frontendFrameworks = ["JavaScript", "React"];

console.log([...frontendBasics,...frontendFrameworks])
console.log(frontendBasics.concat(frontendFrameworks))


const cityArry = ['Tokyo', 'Paris', 'New York', 'Sydney', 'Cairo', 'London']

// method one 
let [a,b,c] = cityArry

console.log([a,b,c])

// method 2

console.log(cityArry.slice(0,3))


const fruitArr = ["Apple", "Banana", "Orange", "Grapes"]
console.log(fruitArr)

function replace(arr,value,newValue){
    // find the index
   let ans =arr.findIndex((fruits)=>{
        return fruits === value
    })
    
    arr[ans] = newValue
    return arr 
    
}

const ans = replace(fruitArr,"Orange","Mango")
console.log(ans)
fruitArr.splice(2,1,"Mango")

console.log(fruitArr)