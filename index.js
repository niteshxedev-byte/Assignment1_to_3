/*1. 1. Write a program to find the largest of three numbers.

2. Check even or odd.

3. Print even numbers between 1 to 50 using loop.

4. let student = {
  name: "sagar",
  age: 20,
  marks: 85
};
print all the keys

5. Print numbers from 1 to 20:
If divisible by 3 → print "Fizz"
If divisible by 5 → print "Buzz"
If divisible by both → print "FizzBuzz"

6. Create an array of 5 fruits and print each fruit using for...of.

7. Guess the Number Game - Create a variable: (Ex:- let secret = 7)
   Take another variable as guess.
   Use conditional statements to print:
    "Correct Guess"
    "Too High"
    "Too Low"
*/


//  1 Write a program to find the largest of three numbers.

let a = 12
let b = 32;
let c = 34;


function findLargerstInThree(a, b, c) {
    console.log(a > b ? a : b > c ? b : c)

}
findLargerstInThree(a, b, c)



function cheakOddEven(num) {
    console.log(num % 2 == 0 ? "even" : "odd");
}
cheakOddEven(1);
cheakOddEven(2);


// Print even numbers between 1 to 50 using loop.

console.log("Print even numbers between 1 to 50 using loop.")

const printEven = (start, end) => {
    for (let i = start; i <= end; i++) {
        if (i % 2 == 0) {
            console.log(`even numbers ${i}`)
        }
    }

}
printEven(1, 50)


// print all the keys
console.log("print all the keys")
let student = {
    name: "sagar",
    age: 20,
    marks: 85
};

let printKeys = (objName) => {

    for (i in objName) {
        console.log(i)
    }
}
printKeys(student)


// 
/*5. Print numbers from 1 to 20:
If divisible by 3 → print "Fizz"
If divisible by 5 → print "Buzz"
If divisible by both → print "FizzBuzz"*/



function ch(startidx, endidx) {
    for (let i = startidx; i <= endidx; i++) {

        if (i % 3 == 0 && i  % 5 == 0) {
            console.log(`FizzBuzz ${i}`)
        }
        if (i % 3 == 0) {
            console.log(`Fizz ${i} `)

        }
         if (i % 5 == 0) {
            console.log(`Buzz  ${i}`)
        }


    }
}
ch(1, 20)


// 6. Create an array of 5 fruits and print each fruit using for...of.
console.log("pritn,fruit array")

const fruits = ["Apple", "Banana", "Orange", "Mango", "Strawberry"];


function printFruitName(array){
    for(i of array){
        console.log(i)
    }


}

printFruitName(fruits)




// 
//  7 Guess the Number Game - Create a variable: (Ex:- let secret = 7)
//    Take another variable as guess.
//    Use conditional statements to print:
// "Correct Guess"
//  "Too High"
    // "Too Low"

function numberGame(userInp){
    let guss = Math.floor(Math.random()*10)
    if(userInp >guss){
        console.log("Too High")
    }
      if(userInp <guss){
        console.log("Too low")
    }
    else{
        console.log("Correct Guess")
    }
}
numberGame(3)