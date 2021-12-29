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
equals.addEventListener('click', event => {
    operate(integerA, operatorVal, integerB);
});


const clear = document.getElementById('clear');
clear.addEventListener('click', function clear() {
    display.innerText = '0';
    reset();
});

function reset() {
    integerA = undefined;
    integerB = undefined;
    operatorVal = undefined;
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
    } else {
        value = undefined;
    };
    display.innerText = value;
    integerA = display.innerText;
    console.log(value);
    return value;
};

// add the ability for the calculator to display a when a is pressed and not b and then =
// add the ability to type longer numbers than single digits *may require changes to the current a/b system