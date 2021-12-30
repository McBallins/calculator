let mode = 'a';

const displayA = document.getElementById('displaya');
const displayB = document.getElementById('displayb');
const displayOperator = document.getElementById('displayoperator');

let integerA = '0';
let integerB = '0';
const integers = document.querySelectorAll('.integer');
integers.forEach(integer => {
    integer.addEventListener('click', event => {
        addDigits(integer.textContent);
    });
});

function addDigits(digit) {
    if(mode === 'a') {
        integerA += digit;
        displayB.textContent = round(integerA);
    } else if(mode === 'b') {
        integerB += digit;
        displayB.textContent = round(integerB);
    };
}

let decimalAvaiable = true;
const decimal = document.getElementById('decimal');
decimal.addEventListener('click', event => {
    if(mode === 'a' && decimalAvaiable) {
        integerA = round(integerA);
        if(integerA === '') {
            integerA = integerA + '0.';
        } else {
            integerA = integerA + '.';
        };
        displayB.textContent = integerA;
        decimalAvaiable = false;
    } else if(mode === 'b') {
        if(integerA === '' || integerA === '0') {
            integerB = integerB + '0.';
        } else {
            integerB = integerB + '.';
        };
        displayB.textContent = integerB;
        decimalAvaiable = false;
    };
});

function round(n) {
    if((/[.]/.test(n)) !== true) {
        n = (n*1/1).toString();
    };
    if(n.length > 10) {
        if(n < 1) {
            n =  '...' + n.slice(n.length - 8);
            return n;
        } else {
            if(((/[.]/).test(n))) {
                n =  '...' + n.slice(n.length - 8);
                return n;
            } else {
                const sliceValue = (n.length - 3).toString().length;
                n = n.slice(0, 8 - sliceValue) + `E+${n.length - 7}`;
                return n;
            };
        }
    };
    return n;
};

const operators = document.querySelectorAll('.operator');
operators.forEach(operator => {
    operator.addEventListener('click', event => {
        selectOperator(operator.textContent);
    });
});
function selectOperator(operator) {
    if(mode === 'a') {
        displayOperator.textContent = operator;
        displayA.textContent = displayB.textContent;
        displayB.textContent = '0';
        integerB = 0;
        mode = 'b';
    } else if(mode === 'b') {
        calculate();
        displayOperator.textContent = operator;
    };
}

const equals = document.getElementById('equals')
equals.addEventListener('click', event => {
    calculate();
});
function calculate() {
    if((mode === 'a' || mode === 'b') && (displayA.textContent !== '') && (displayB.textContent !== '') && (displayOperator.textContent !== '')) {
        operate(integerA, displayOperator.textContent, integerB);
    };
}

const backspace = document.getElementById('backspace');
backspace.addEventListener('click', event => {
    if(mode === 'a') {
        integerA = integerA.slice(0,integerA.length-1);
        displayB.textContent = round(integerA);
    } else if(mode === 'b') {
        integerB = integerA.slice(0,integerB.length-1);
        displayB.textContent = round(integerB);
    };
});

const clear = document.getElementById('clear');
clear.addEventListener('click', event => {
    reset();
});
function reset() {
    integerA = '0';
    integerB = '0';
    displayA.textContent = '';
    displayB.textContent = '0';
    displayOperator.textContent = '';
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
    let temp = displayOperator.textContent;
    let modeCCheck = (mode === 'c')
    reset();
    displayOperator.textContent = temp;
    mode = 'b';
    if (modeCCheck === true) {
        mode = 'c';
        modeCCheck = false;
    };
    integerA = value;
    if(value === 'Nice Try!') {
        displayA.textContent = value;
        displayB.textContent = '';
    } else {
        if(value.length > 10 && /[.]/.test(value)) {
            value = Math.round(value*10000000000)/10000000000;
        } else {
            value = round(value);
        }
        displayA.textContent = value;
    };
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
    if(b == 0) {
        console.log(b);
        round(b);
        console.log(b);
        reset();
        mode = 'c';
        return 'Nice Try!';
    } else {
    return a/b;
    };
};

// Adding keyboard support down here

document.addEventListener('keydown', e => {
    if(/Digit[0-9]/.test(e.code)) {
    addDigits(e.code.slice(5, 6));
    };
    if(/Numpad[0-9]/.test(e.code)) {
        addDigits(e.code.slice(6, 7));
    };

    // operators
    if(/Minus/.test(e.code) || /NumpadSubtract/.test(e.code)) {
        
    };
    console.log(e.code);


    // decimal

    // backspace

    // equals (enter)

});
// make it pretty with css