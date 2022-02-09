const body = document.querySelector('body');
const screen = document.querySelector('.screen');
const clearBtn = document.querySelector('.clear');
const equalBtn = document.querySelector('.equal');
const signBtn = document.querySelector('.sign');
const sqrtBtn = document.querySelector('.sqrt');
const eraseBtn = document.querySelector('.erase');
const decimalBtn = document.querySelector('.decimal');
const numbers = Array.from(document.querySelectorAll('.number'));
const operators = Array.from(document.querySelectorAll('.operator'));
let firstNum = '';
let selectedOperand = '';

//sets initial value on screen to zero
screen.value = 0;

//gives every number key an event listener which displays the number on screen
window.addEventListener('keydown', keyboardInput);

numbers.forEach(number => number.addEventListener('click', displayNum));

operators.forEach(operator => operator.addEventListener('click', chooseOperand));

clearBtn.addEventListener('click', clearScreen);

equalBtn.addEventListener('click', operate);

eraseBtn.addEventListener('click', erase);

decimalBtn.addEventListener('click', decimal);

signBtn.addEventListener('click', signChange);

sqrtBtn.addEventListener('click', sqrt);

function keyboardInput (e) {
    if (e.key >= 0 && e.key <= 9) {
        if (screen.value == "0") screen.value = "";
        screen.value += e.key;
    }
    if (e.key == 'c' || e.key == 'Escape') clearScreen();
    if (e.key == '=' || e.key == 'Enter') operate();
    if (e.key == 'Backspace') erase();
    if (e.key == '.') decimal();
    if (e.key == 'n') signChange();
    if (e.key == 's') sqrt();
    if (e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/' || e.key == '^') {
        firstNum = screen.value;
        selectedOperand = e.key;
        screen.value = '';
    }
}

//if zero is the first digit, removes it. Then, set screen display value to the clicked number
function displayNum (e) { 
    //if (selectedOperand != '') screen.value = "";
    if (screen.value == "0") screen.value = "";
    screen.value += e.target.value;
    //now once operand is already seleccted and a second number is inout, if another operand is chosen then go ahead and result(firstNum and current scrren num)
    //if (selectedOperand != '' && firstNum != '') result();
    //what if we save a second num to a new variable, secondNum. Then if secondNum & selectedOperand arent empty, we can go ahead and run result with first Num and secondNum
}

function clearScreen() {
    screen.value = 0;
    firstNum = '';
    selectedOperand = '';
}

function erase () {
    screen.value = screen.value.slice(0,-1);
}

function signChange () {
    screen.value *= -1;
}

function sqrt () {
    screen.value **= (1/2);
}

function decimal () {
    if (screen.value.indexOf('.') != -1) return;
    screen.value += '.';
}

//saves first input and whatever operator was clicked. Then, resets screen for next number input
function chooseOperand(e) {
    firstNum = screen.value;
    selectedOperand = e.target.value;
    screen.value = '';
}

//runs the operation clicked on first input and current input
function operate () {
    if (screen.value == '') return;
    switch (selectedOperand) {
        case '+':
            screen.value = sum(firstNum,screen.value)
            break;
        case '-':
            screen.value = subtract(firstNum,screen.value)
            break;
        case '*':
            screen.value = multiply(firstNum,screen.value);
            break;
        case '/':
            if (screen.value == 0) return screen.value = 'CAN\'T DIVIDE BY 0!';
            screen.value = divide(firstNum,screen.value)
            break;
        case '^':
            screen.value = power(firstNum,screen.value)
            break;
    }
    selectedOperand = '';
}

function sum (a, b) {
    return parseFloat((parseFloat(a) + parseFloat(b)).toFixed(5));
}

function subtract (a, b) {
    return parseFloat((parseFloat(a) - parseFloat(b)).toFixed(5));
}

function multiply (a, b) {
    return parseFloat((parseFloat(a) * parseFloat(b)).toFixed(5));
}

function divide (a, b) {
    return parseFloat((parseFloat(a) / parseFloat(b)).toFixed(5));
}

function power (a, b) {
    return parseFloat((parseFloat(a) ** parseFloat(b)).toFixed(5));
}

//typing in more than one int after clicking operand is not working
    //Check for a secondOp and secondNum. 
    //If none then save firstnum, and firstop.
    //if there is a firstnum and first op, then save secondNum and second Op
    //thennn operate(firstOp, firstNum, and secondNum) make sure to alter operate function for this
    //after operate displays the answer,firstNum = screen.value and firstOp = second Op and secondOp = '' and secondNum = '';
//super large numbers overflowing
//make it so you cant sqrt(neg)