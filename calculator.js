const html = document.querySelector('html');
const screen = document.querySelector('.screen');
const clearBtn = document.querySelector('.clear');
const equalBtn = document.querySelector('.equal');
const signBtn = document.querySelector('.sign');
const sqrtBtn = document.querySelector('.sqrt');
const eraseBtn = document.querySelector('.erase');
const decimalBtn = document.querySelector('.decimal');
const numbers = Array.from(document.querySelectorAll('.number'));
const operators = Array.from(document.querySelectorAll('.operator'));

//sets initial value on screen to zero
screen.value = 0;

let firstNum;
let selectedOperand;

//gives every number key an event listener which displays the number on screen
numbers.map(number => number.addEventListener('click', displayNum));

html.addEventListener('keydown', function (e) {
    if (!Number.isInteger(parseInt(e.key))) return;
    if (screen.value == 0) screen.value = "";
    screen.value += e.key;
});

//gives every operator an event listener
operators.map(operator => operator.addEventListener('click', operate));

clearBtn.addEventListener('click', clearScreen);

equalBtn.addEventListener('click', result);

signBtn.addEventListener('click', signChange);

sqrtBtn.addEventListener('click', sqrt);

eraseBtn.addEventListener('click', erase);

decimalBtn.addEventListener('click', decimal);

//if zero is the first digit, removes it. Then, set screen display value to the clicked number
function displayNum (e) {
    if (screen.value == 0) screen.value = "";
    screen.value += e.target.value
}

function erase () {
    screen.value = screen.value.slice(0,-1);
}

function clearScreen() {
    screen.value = 0;
}

function signChange () {
    screen.value *= -1
}

function sqrt () {
    screen.value **= (1/2)
}

function decimal () {
    if (screen.value.indexOf('.') != -1) return;
    screen.value += '.';
}

//saves first input and whatever operator was clicked. Then, resets screen for next number input
function operate(e) {
    firstNum = screen.value;
    selectedOperand = e.target.value;
    screen.value = "";
}

//runs the operation clicked on first input and current input
function result () {
    switch (selectedOperand) {
        case 'plus':
            screen.value = sum(firstNum,screen.value)
            break;
        case 'minus':
            screen.value = subtract(firstNum,screen.value)
            break;
        case 'multiply':
            screen.value = multiply(firstNum,screen.value);
            break;
        case 'divide':
            if (screen.value == 0) return screen.value = 'Bruh, you cant divide by 0!';
            screen.value = divide(firstNum,screen.value)
            break;
        case 'power':
            screen.value = power(firstNum,screen.value)
            break;
    }
}

function sum (a, b) {
    return parseFloat(a) + parseFloat(b);
}

function subtract (a, b) {
    return parseFloat(a) - parseFloat(b);
}

function multiply (a, b) {
    return (parseFloat(a) * parseFloat(b)).toFixed(12);
}

function divide (a, b) {
    return parseFloat(a) / parseFloat(b);
}

function power (a, b) {
    return parseFloat(a) ** parseFloat(b);
}


//instead of saving the first input to variable, jsut save it to an array
//two options:
//1. make selectedOperand an array save the operand into it.
//2. save the first num and selectedOperand into same array
        //then, somehow, do all functions in order within array
//equals will then do that arrra