const display = document.getElementById('display');

let integerA;
let integerB;

const integers = document.querySelectorAll('.integer');

integers.forEach(integer => {
    integer.addEventListener('click', event => {
        if(integerA === undefined) {
            integerA = integer.innerText;
        } else {
            integerB = integer.innerText;
        }
        console.log(`${integerA}, ${integerB}`);
    });
});

let operatorVal;
const operators = document.querySelectorAll('.operator');
operators.forEach(operator => {
    operator.addEventListener('click', event => {
        operatorVal = operator.innerText;
        console.log(operatorVal);
    });
});

const equals = document.getElementById('equals')
equals.addEventListener('click', function eval() {
    operate(integerA, integerB, operator);
});


const clear = document.getElementById('clear');
clear.addEventListener('click', function clear() {
    display.innerText = '0';
    integerA = undefined;
    integerB = undefined;
});

function add(a, b) {
    return a+b;
};

function subtract(a, b) {
    return a-b;
};

function multiply(a, b) {
    return a*b;
};

function divide(a, b) {
    return a/b;
};

function operate(a, o, b) {
    let value;
    if(o === '+') {
        value = add(a, b);
    } else if(o === '-') {
        value = subtract(a, b);
    } else if(o === '*') {
        value = multiply(a, b);
    } else if(o === '/') {
        value = divide(a, b);
    } else {
        value = undefined;
    };
    display.innerText = value;
    return value;
};

