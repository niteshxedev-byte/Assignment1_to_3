// 1. Print odd or even from array using arrow functions.

const oddEven = (arr) => {
    arr.forEach(element => {
        console.log(element % 2 == 0 ? `even ${element}` : `odd ${element} `)
    }
    )
}



oddEven([1, 2, 3, 5, 6, 7])


// Create an array and find the largest using both.

const arr = [22, 34, 21, 45, 32, 56];

console.log(Math.max(...arr))

//  Print the squares of array using arrow functions.


const arr_1 = [2, 3, 4, 5, 6];


const printSquare = (arr) => {
    arr.forEach(element => {
        console.log(element * element)
    }
    )
}
printSquare(arr_1)



// Create a function that takes your info as parameters and pass info in function call.

const printInfo = (...c) => {
    console.log(`Username : ${c[0]}`)
    console.log(`Age : ${c[1]}`)
    console.log(`State : ${c[2]}`)

}

printInfo("Nitesh", 22, "H.P")




//  Guess the number game by taking input using functions.
const computer = Math.floor(Math.random() * 100);

function numberGuessGame(userInput) {
    console.log(
        computer < userInput
            ? "Your guess is too high!"
            : computer > userInput
                ? "Your guess is too low!"
                : "You won!"
    );
}

// Testing the function
console.log(`(Psst... the computer chose: ${computer})`); // Temporary log to see the target
numberGuessGame(5);



// 6. Create a function calculateArea(length, width) that returns the area of a rectangle.


function calculateArea(length, width) {
    return length * width;

}
console.log(calculateArea(23, 5))



//  Create a function countVowels(str) that counts the total vowels in a string.

function countVowels(str) {
    let count = 0
    for (i of str) {
        if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
            count++
        }
    }
    console.log(count)
}
countVowels("apple")


// 8. Create an arrow function checkPositive(num) that checks whether a number is positive, negative, or zero.


const checkPositive = (num) => {
    if (num > 0) {
        return "number is postive"
    }
    else if (num < 0) {
        return "number is negitive"
    }
    else {
        return "number is zero"
    }
}

console.log(checkPositive(0))
console.log(checkPositive(1))
console.log(checkPositive(-1))


// 9. Create an arrow function convertToUpper(str) that converts a string into uppercase.


const convertToUpper = (str) => str.toUpperCase()
console.log(convertToUpper("nitesh"))


// 10. Create an arrow function (arr) that returns the first element of an array.
const getFirstElement = (arr) => arr[0]
console.log(getFirstElement([12, 3, 24, 453, 443]))



// Create an arrow function sumArray(arr) that returns the sum of all elements in an array.


const sumArray = (arr) => {
    let sum = 0
    for (i of arr) {
        sum += i
    }
    return sum
}

console.log(sumArray([12, 2, 32, 1]))


// 12. Create a function that counts how many times a specific character appears in a string.

const countRepetedCharactor = (str) => {
    let length = str.length;
    let duplicates = {}; // 1. Object to store our final results

    for (let i = 0; i < length; i++) {
        let char = str[i];
        let count = 0; // 2. Reset count for the current character

        // Inner loop scans the entire string to count matches
        for (let j = 0; j < length; j++) {
            if (char === str[j]) {
                count++; // 3. Increment if characters match
            }
        }
        
        // 4. If found more than once, save it to our object
        if (count > 1) {
            duplicates[char] = count;
        }
    }

    return duplicates; // 5. Return the final result
}

// Example Usage:
console.log(countRepetedCharactor("programming"));
// Output: { r: 2, g: 2, m: 2 }


// 13. Create a function and an equivalent arrow function for calculating the cube of a number.

function calculateCube(num){
    return num*num*num
}

console.log(calculateCube(5))



const  calculateArrowCube= (num)=>{
    return num*num*num
}

console.log(calculateArrowCube(5))