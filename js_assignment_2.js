// print 20 to 11 using while loop

let i = 20;
while (i > 10) {
    console.log(i)
    i--
}

// print talbe of any number (take user input)


const readlineSync = require('readline-sync');
let nummber = Number(readlineSync.question("Enter the Number: "))

for (let i = 1; i < 11; i++) {
    console.log(`${nummber} x ${i} = ${nummber * i} `)
}


// object questions 

let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
}

// print the brand using dot notation 

console.log(car.brand) // toyota

// print the model using beacket notation

console.log(car["model"])

// update the year of car to 2020

car.year = 2022;
console.log(car.year)



// convert first letter of string into uppercase 

let str = "javascript"


console.log(str.charAt(0).toUpperCase() + str.slice(1))




// create an array 
// Print sum of even numbers


let arr = [1, 2, 3, 4, 5, 6];
let evenSum = 0
let oddSum = 0
for (i of arr) {
    if (i % 2 == 0) {
        evenSum = evenSum + i
    }
    else {
        oddSum = oddSum + i
    }

}
console.log(evenSum)
console.log(oddSum)

//how many times "l" appears

let str2 = "hello world"
let count = 0
for (let i = 0; i < str2.length; i++) {
    if (str2[i] === "l") {
        count++
    }
}
console.log(count)



// make a simple calculator using switch case

let inp1 = 3;
let inp2 = 4;
let op = "+"

switch (op) {
    case "+":
        console.log(inp1 + inp2)
        break;
    case "-":
        console.log(inp1 - inp2)
        break;
    case "x":
        console.log(inp1 * inp2)
        break;
    case "/":
        console.log(inp1 / inp2)
        break;
   

    default:
        console.log("cheak operator")
        break;
}


//  find the sum of numbers feom 1 to 100


const ans= 100*(100+1)/2
console.log(ans)


// 

let str3 = "nitesh"


console.log(str3.charAt(0).toUpperCase() + str3.slice(1))


