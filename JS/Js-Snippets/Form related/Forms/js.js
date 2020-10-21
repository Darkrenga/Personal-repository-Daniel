/*
Referring to the element with an attribute of signup
let form = document.getElementById("signup");

form.addEventListener('submit', (event) => {
    
    form.submit()

    event.preventDefault();
});

Calling the first form in the dom
document.forms[0];
*/

function success(input) {
    input.className = 'success';

    const error = input.previousElementSibling;
    error.innerText = '';
    return true;
}

function error(input, message) {
    input.className = 'error';
    //Show the error message
    const error = input.previousElementSibling;
    error.innerText = message;
    return false;
}

function requireValue(input, message) {
    return input.value.trim() === '' ?
     error(input, message) :
     success(input);
}

function validateEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(input.value.trim()) ?
    success(input) :
    error(input, 'Invalid email format');
}

const form = document.getElementById("signup");

const name = form.elements[0];
const email = form.elements[1];

const requiredFields = [
    {input: name, message: 'Name is required'},
    {input: email, message: 'Email is required'}
];

form.addEventListener('submit', (event) => {
    let valid = true;
    requiredFields.forEach((input) => {
        valid = requireValue(input.input, input.message);
    });
    if (valid) {
        valid = validateEmail(email);
    }
    if (!valid) {
        event.preventDefault();
    }
});