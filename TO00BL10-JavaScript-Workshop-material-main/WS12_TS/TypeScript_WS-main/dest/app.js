"use strict";
function sayHello(name) {
    console.log("Hello, ".concat(name, "!"));
}
sayHello("Mika");
var numericVar = 42;
var stringVar = "Hello, TypeScript!";
var booleanVar = true;
var anyVar = "This can be anything.";
var numberArray = [1, 2, 3];
var stringArray = ["apple", "banana", "orange"];
var person = ["John", 25, true];
function addNumbers(a, b) {
    return a + b;
}
function printString(input) {
    console.log(input);
}
var unionVar = 10;
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Monday"] = 0] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 1] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 2] = "Wednesday";
    DaysOfWeek[DaysOfWeek["Thursday"] = 3] = "Thursday";
    DaysOfWeek[DaysOfWeek["Friday"] = 4] = "Friday";
    DaysOfWeek[DaysOfWeek["Saturday"] = 5] = "Saturday";
    DaysOfWeek[DaysOfWeek["Sunday"] = 6] = "Sunday";
})(DaysOfWeek || (DaysOfWeek = {}));
var anyValue = "This is a string.";
var stringLength = anyValue.length;
console.log(addNumbers(5, 7));
printString("TypeScript is awesome!");
console.log(numberArray);
console.log(stringArray);
console.log(person);
console.log(DaysOfWeek.Monday);
console.log(stringLength);
