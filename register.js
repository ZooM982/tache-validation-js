const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

sessionStorage.setItem('id', username)
sessionStorage.setItem('mail', email)
sessionStorage.setItem('passmot', password)



form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    
    if(usernameValue === '') {
        setError(username, 'Un ID est obligatoire');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, ' Un Email est obligatoire');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Mettre un mail valide');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Un mot de passe est obligatioire');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Le mot de passe doit etre superieur à 8 characters.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Veillez confirmer le mot de passe');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Le mot de passe ne correspont pas");
    } else {
        location.href="accueil.html"
    }
};
