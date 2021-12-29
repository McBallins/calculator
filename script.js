const displayA = document.getElementById('displaya');

let integerA = '';
let integerB = '';
let mode = 'a';

const integers = document.querySelectorAll('.integer');

integers.forEach(integer => {
    integer.addEventListener('click', event => {
        if(mode === 'a') {
            integerA = integerA + integer.innerText;
            displayA.innerText = integerA;
            console.log(`${integerA}, ${integerB}`);
        } else if(mode === 'b') {
            integerB = integerB + integer.innerText;
            displayA.innerText = integerB;
            console.log(`${integerA}, ${integerB}`);
        }
    });
});

let operatorVal;
const operators = document.querySelectorAll('.operator');
operators.forEach(operator => {
    operator.addEventListener('click', event => {
        mode = 'b';
        operatorVal = operator.innerText;
        console.log(operatorVal);
    });
});

const equals = document.getElementById('equals')
equals.addEventListener('click', event => {
    operate(integerA, operatorVal, integerB);
});


const clear = document.getElementById('clear');
clear.addEventListener('click', function clear() {
    displayA.innerText = '0';
    reset();
});

function reset() {
    integerA = '';
    integerB = '';
    operatorVal = '';
}

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
    displayA.innerText = value;
    integerA = '';
    console.log(value);
    return value;
};

// add a second display, one for currently working on number and another for number not working on, add a span to store selected operator
// add the ability to type longer numbers than single digits *may require changes to the current a/b system