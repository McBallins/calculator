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
        } else if(mode === 'b') {
            integerB = integerB + integer.innerText;
            displayB.innerText = integerB;
        };
    });
});

let decimalAvaiable = true;
const decimal = document.getElementById('decimal');
decimal.addEventListener('click', event => {
    
})

let operatorVal;
const operators = document.querySelectorAll('.operator');
operators.forEach(operator => {
    operator.addEventListener('click', event => {
        if(mode === 'a') {
            operatorVal = operator.innerText;
            displayOperator.innerText = operatorVal;
            displayA.innerText = displayB.innerText;
            displayB.innerText = '';
            mode = 'b';
        } else if(mode === 'b') {
            calculate();
            operatorVal = operator.innerText;
            displayOperator.innerText = operatorVal;
        };
    });
});

const equals = document.getElementById('equals')
equals.addEventListener('click', event => {
    calculate();
});
function calculate() {
    if((mode === 'a' || mode === 'b') && (displayA.innerText !== '') && (displayB.innerText !== '') && (displayOperator.innerText !== '')) {
        operate(integerA, operatorVal, integerB);
    };
}

const backspace = document.getElementById('backspace');
backspace.addEventListener('click', event => {
    displayB.innerText = displayB.innerText.slice(0,(displayB.innerText.length-1));
    if(mode === 'a') {
        integerA = displayB.innerText;
    } else if(mode === 'b') {
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
    decimalAvaiable = true;
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
    let modeCCheck = (mode === 'c')
    reset();
    operatorVal = temp;
    displayOperator.innerText = operatorVal;
    mode = 'b';
    if (modeCCheck === true) {
        mode = 'c';
        modeCCheck = false;
    };
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
    if(b === '0') {
        reset();
        mode = 'c';
        return 'Nice Try!';
    } else {
    return a/b;
    };
};

// round long numbers
// add decimal support
// add keyboard support 
// make it pretty with css