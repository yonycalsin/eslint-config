/* eslint-disable no-empty */
/* eslint-disable no-constant-condition */
/* eslint-disable no-with */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// Declare a variable without using it
const unusedVariable: string = 'Hello, world!'

// Assign a value to a constant variable
const constantVariable: string = 'Hello, TypeScript!'

constantVariable = 'Goodbye, TypeScript!'

// Use a variable before it is declared
console.log(notDeclaredVariable)

// Declare a function without using it
function unusedFunction(): void {
  console.log('This function is never called.')
}

// Use an undeclared variable in a function
function undeclaredVariable(): void {
  console.log(nonExistentVariable)
}

// Use a non-existent property on an object
const myObject: any = {}
console.log(myObject.nonExistentProperty)

// Use an "eval" statement
eval("console.log('Hello, eval!')")

// Use a "with" statement
const myObject2: any = {}

with (myObject2) {
  console.log('Hello, with!')
}

// Use an arrow function with a "function" keyword
const arrowFunction: Function = function () {
  console.log('Hello, arrow function!')
}

// Use an empty block statement
if (false) {
}

// Use a "for-in" loop without checking hasOwnProperty
const myObject3: any = { a: 1, b: 2 }

for (const key in myObject3) {
  console.log(key)
}

// Use a "for-of" loop on an object
const myObject4: any = { a: 1, b: 2 }

for (const value of myObject4) {
  console.log(value)
}

// Use a deprecated function
console.error('This function is deprecated.')

// Use a console statement in production code
console.log('This should be removed from production code.')
