const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit', (e) => {

    if (validateInputs()) {
        e.preventDefault();
    }
})

function validateInputs() {
    const usernameVal = username.ariaValueMax.trim();
    const emailVal = email.ariaValueMax.trim();
    const passwordVal = password.ariaValueMax.trim();
    const cpasswordVal = cpassword.ariaValueMax.trim();
    let success = true

    if (usernameVal === '') {
        success = false;
        setError(username, 'Username is required')
    }
    else {
        setSuccess(username)
    }

    if (emailVal === '') {
        success = false;
        setError(email, 'Email is required')
    }
    else if (!validateEmail(emailVal)) {
        success = false;
        setError(email, 'Please enter the valid email')
    }
    else {
        setSuccess(email)
    }

    if (passwordVal === '') {
        success = false;
        setError(password, 'Password is required')
    }
    else if (passwordVal.length < 8) {
        success = false;
        setError(password, 'Password must be atlest 8 characteers long')
    }
    else {
        setSuccess(password)
    }

    if (cpasswordVal === '') {
        success = false;
        setError(cpassword, 'Confirm Password is required')
    }
    else if (cpasswordVal !== passwordVal) {
        success = false;
        setError(cpassword, 'Password does not match')
    }
    else {
        setSuccess(cpassword)
    }
    return success;


}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            // /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        );
}