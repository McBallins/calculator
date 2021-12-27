
const display = document.getElementById('display');

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

//Event listeners for buttons, i will need a switch here that changes which variable is being set
let integerA;
let integerB;
integers = document.querySelectorAll('.integer');

function setA() {
    integers.forEach(integer => {
        integer.addEventListener('click', event => {
            integerA = integer.innerText;
            console.log(integerA);
    });
});
};

function setB() {
    integers.forEach(integer => {
        integer.addEventListener('click', event => {
            integerA = integer.innerText;
            console.log(integerB);
    });
});
};