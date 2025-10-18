function sayHello(name: string): void {
    console.log(`Hello, ${name}!`);
}

sayHello("Mika");


// 1. Declare Variables
let numericVar: number = 42;
let stringVar: string = "Hello, TypeScript!";
let booleanVar: boolean = true;
let anyVar: any = "This can be anything.";

// 2. Arrays and Tuples
let numberArray: number[] = [1, 2, 3];
let stringArray: string[] = ["apple", "banana", "orange"];
let person: [string, number, boolean] = ["John", 25, true];

// 3. Functions
function addNumbers(a: number, b: number): number {
  return a + b;
}

function printString(input: string): void {
  console.log(input);
}

// 4. Union and Intersection Types
let unionVar: number | string = 10;
//let intersectionVar: number & string = 42; // This will throw an error.

// 5. Type Aliases
type NumberOperation = (a: number, b: number) => number;
type MixedArray = (number | string)[];

// 6. Enums
enum DaysOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

// 7. Type Assertion
let anyValue: any = "This is a string.";
let stringLength: number = (anyValue as string).length;


// Test the code
console.log(addNumbers(5, 7));
printString("TypeScript is awesome!");
console.log(numberArray);
console.log(stringArray);
console.log(person);
console.log(DaysOfWeek.Monday);
console.log(stringLength);
