// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

//TODO a) Create a test with an expect statement using the variable provided.

describe('aboutChar', ()=>{
  it('takes in an array of objects and returns an array with a sentence about each person with their name capitalized.', () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    expect(aboutChar(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

//! ● aboutChar › takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

//! ReferenceError: aboutChar is not defined

//TODO b) Create the function that makes the test pass.
// const aboutChar = (array) => {
//   // First create an array that concatenates the two parts needed into a sentence.
//   let sentenceArr = array.map(value => `${value.name} is ${value.occupation}.`)
//   // Map through the array and first replace the first letter of each element with the capitalized version. Then capitalize the first letter after the FIRST space in the sentence.
//   return sentenceArr.map(value => value.replace(value[0], value[0].toUpperCase())).map(value => value.replace(value[value.indexOf(" ") + 1], value[value.indexOf(" ") + 1].toUpperCase()))
// }

//* PASS  ./code-challenges.test.js
//* aboutChar
//*   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (2 ms)

//TODO REFACTOR
//? We don't need to store any of the map results into an array
const aboutChar = array => array.map(value => `${value.name} is ${value.occupation}.`).map(value => value.replace(value[0], value[0].toUpperCase())).map(value => value.replace(value[value.indexOf(" ") + 1], value[value.indexOf(" ") + 1].toUpperCase()))


//TODO --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

//TODO a) Create a test with an expect statement using the variables provided.

describe('remainder3', () => {
  it('takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3', () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
    expect(remainder3(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remainder3(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})
//! ● remainder3 › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

//! ReferenceError: remainder3 is not defined

// b) Create the function that makes the test pass.
// // First we declare our function remainder3 and define the parameter as array
// const remainder3 = (array) => {
//   // The first step would be filter only numbers. Then we would create an array that only has the remainders 
//  return array.filter(value => typeof value === 'number').map(value => value % 3)
// }
//* PASS  ./code-challenges.test.js
//* aboutChar
//*   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (2 ms)
//* remainder3
//*   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

//TODO Refactor
//? We can get rid of some returns and parentheses and curly braces.
const remainder3 = array => array.filter(value => typeof value === 'number').map(value => value % 3)

//? I'm not sure why the aboutChar function ran slower this time around
//* PASS  ./code-challenges.test.js
//* aboutChar
//*   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (4 ms)
//* remainder3
//*   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)

//TODO --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

//TODO a) Create a test with an expect statement using the variables provided.

describe('cubeSum', () => {
  it('takes in an array of numbers and returns the sum of all the numbers cubed',() => {
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
    expect(cubeSum(cubeAndSum1)).toEqual(99)
    expect(cubeSum(cubeAndSum2)).toEqual(1125)
  })
})

//! ● cubeSum › takes in an array of numbers and returns the sum of all the numbers cubed

//!   ReferenceError: cubeSum is not defined

//TODO b) Create the function that makes the test pass.
// // First declare function cubeSum that has a parameter of array
// const cubeSum = (array) => {
//   // First want to return an array with each element cubed. Then we want to sum them all up.
//   return array.map(value => value ** 3).reduce((sum, current)=> sum += current, 0)
// }

//* PASS  ./code-challenges.test.js
//* aboutChar
//*   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (2 ms)
//* remainder3
//*   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)
//* cubeSum
//*   ✓ takes in an array of numbers and returns the sum of all the numbers cubed

//TODO Refactor
//? Just tidying up a bit
const cubeSum = array => array.map(value => value ** 3).reduce((sum, current)=> sum += current, 0)

//* PASS  ./code-challenges.test.js
//* aboutChar
//*   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (2 ms)
//* remainder3
//*   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)
//* cubeSum
//*   ✓ takes in an array of numbers and returns the sum of all the numbers cubed (1 ms)