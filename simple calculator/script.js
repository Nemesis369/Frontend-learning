let currentNum = '';
let prevNum = '';
let operation = '';
let display = document.getElementById("display_num");

function clr() {
    display.value = '';
    currentNum = '';
}

function calculate() {
    let result;
    const prev = parseFloat(prevNum);
    const current = parseFloat(currentNum);
    if(isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    display.value = result;
    currentNum = result;
    prevNum = '';
    operation = null;
}

function clearDisplay() {
    display.value = '';
    currentNum = '';
    prevNum = '';
    operation = null;
}

function setOperation(op) {
    if(currentNum === '') return;
    if(prevNum !== '') calculate();

    operation = op;
    prevNum = currentNum;
    currentNum = '';
}

function append(number) {
    currentNum += number;
    display.value = currentNum;
}
