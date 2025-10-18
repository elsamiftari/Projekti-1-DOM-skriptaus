import { add, subtract, multiply, divide } from './mathUtils.js';

export function calculate(operation, firstNumber, secondNumber) {
    if (operation === '+') {
        return add(firstNumber, secondNumber);
    } else if (operation === '-') {
        return subtract(firstNumber, secondNumber);
    } else if (operation === '*') {
        return multiply(firstNumber, secondNumber);
    } else if (operation === '/') {
        return divide(firstNumber, secondNumber);
    } else {
        throw new Error(`Invalid operation: ${operation}`);
    }
}