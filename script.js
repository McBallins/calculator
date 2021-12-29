let mode = 'a';

const displayA = document.getElementById('displaya');
const displayB = document.getElementById('displayb');
const displayOperator = document.getElementById('displayoperator');

let integerA = '';
let integerB = '';
const integers = document.querySelectorAll('.integer');
integers.forEach(integer => {
    integer.addEventListener('click', event => {
        if(mode === 'a') {
            integerA = integerA + integer.innerText;
            displayB.innerText = integerA;
        } else {
            integerB = integerB + integer.innerText;
            displayB.innerText = integerB;
        };
    });
});

let operatorVal;
const operators = document.querySelectorAll('.operator');
operators.forEach(operator => {
    operator.addEventListener('click', event => {
        if(mode === 'a') {
            operatorVal = operator.innerText;
            displayOperator.innerText = operatorVal;
            displayA.innerText = displayB.innerText;
            displayB.innerText = 0;
            mode = 'b';
        } else {
            operatorVal = operator.innerText;
            displayOperator.innerText = operatorVal;
        };
    });
});

const equals = document.getElementById('equals')
equals.addEventListener('click', event => {
    operate(integerA, operatorVal, integerB);
});

const backspace = document.getElementById('backspace');
backspace.addEventListener('click', event => {
    displayB.innerText = displayB.innerText.slice(0,(displayB.innerText.length-1));
    if(mode === 'a') {
        integerA = displayB.innerText;
    } else {
        integerB = displayB.innerText;
    };
});

const clear = document.getElementById('clear');
clear.addEventListener('click', event => {
    reset();
});
function reset() {
    integerA = '';
    integerB = '';
    operatorVal = '';
    displayA.innerText = '';
    displayB.innerText = '';
    displayOperator.innerText = '';
    mode = 'a';
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
    };
    let temp = operatorVal;
    reset();
    operatorVal = temp;
    displayOperator.innerText = operatorVal;
    mode = 'b';
    displayA.innerText = value;
    integerA = displayA.innerText;
};
function add(a, b) {
    return Number(a)+Number(b);
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

// mostly need to work on css now