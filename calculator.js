const calculator = document.querySelector('.calculator');
const screen = document.querySelector('.screen');
const keys = document.querySelector('.keys');



function generateKeys() {
    for (let i = 0; i < 5; i++) {
        row = document.createElement('div');
        row.classList.add('row')
        keys.appendChild(row);
        for (let j = 0; j < 4; j++) {
            key = document.createElement('div');
            key.classList.add('key')
            row.appendChild(key);
        }
    }
}

generateKeys();

const allKeys = Array.from(document.querySelectorAll('.key'));

const buttons = allKeys.map(key => key.appendChild(document.createElement('button')))


buttons[0].textContent = 'sqrt';
buttons[1].textContent = 'x2';
buttons[2].textContent = 'del';
buttons[3].textContent = '÷';
buttons[4].textContent = '7';
buttons[5].textContent = '8';
buttons[6].textContent = '9';
buttons[7].textContent = '*';
buttons[8].textContent = '4';
buttons[9].textContent = '5';
buttons[10].textContent = '6';
buttons[11].textContent = '-';
buttons[12].textContent = '1';
buttons[13].textContent = '2';
buttons[14].textContent = '3';
buttons[15].textContent = '+';
buttons[16].textContent = 'C';
buttons[17].textContent = '0';
buttons[18].textContent = ',';
buttons[19].textContent = '=';



//need to make button color darker when click and press to make it feel like you clicked.