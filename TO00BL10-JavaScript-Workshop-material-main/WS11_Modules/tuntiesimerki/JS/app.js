import { calculate } from "./calculator.js"
import { add } from './mathUtils.js';

const nappi = document.getElementById('nappi');
nappi.addEventListener('click', () => {
    const firstNumber = parseFloat(document.getElementById('firstNumber').value);
    const secondNumber = parseFloat(document.getElementById('secondNumber').value);
    const operation = document.getElementById('operation').value;
    const result = calculate(operation, firstNumber, secondNumber);
    const tulos = document.getElementById('tulos')
    tulos.innerHTML = result;

    try {
        const divisionResult = calculate('/', firstNumber, secondNumber);
        console.log('Division:', divisionResult);
    } catch (error) {
        console.error(error);
    }
}
);