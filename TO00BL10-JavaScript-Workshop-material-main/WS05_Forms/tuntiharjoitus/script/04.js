const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// lisätään lomakkeeseen tapahtumankäsittelijä
form.addEventListener('submit', e => {
    // Estetään lomakkeen uudelleenlataus
    e.preventDefault();
    // kutsutaan funktiota validateInputs()
    validateInputs();
});

// funktio setError() määrittely
const setError = (element, message) => {
    // haetaan elementin vanhempielementti
    const inputControl = element.parentElement;
    // haetaan elementin vanhempielementistä virheilmoitusta varten varattu span-elementti
    const errorDisplay = inputControl.querySelector('.error');
    // asetetaan virheilmoitus span-elementtiin
    errorDisplay.innerText = message;
    // lisätään vanhempielementtiin luokka error
    inputControl.classList.add('error');
    // poistetaan vanhempielementistä luokka success
    inputControl.classList.remove('success')
}
// funktio setSuccess() määrittely
const setSuccess = element => {
    // haetaan elementin vanhempielementti
    const inputControl = element.parentElement;
    // haetaan elementin vanhempielementistä virheilmoitusta varten varattu span-elementti
    const errorDisplay = inputControl.querySelector('.error');
    // poistetaan virheilmoitus span-elementtistä
    errorDisplay.innerText = '';
    // lisätään vanhempielementtiin luokka success
    inputControl.classList.add('success');
    // poistetaan vanhempielementistä luokka error
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    // Regular expression for email validation - can be checked from https://regex101.com/
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // palautetaan totuusarvo, joka kertoo vastaako email muotoa re-regular expression mukaisesti
    return re.test(String(email).toLowerCase());
}
// funktio validateInputs() määrittely
const validateInputs = () => {
    // haetaan input-kenttien arvot ja poistetaan ylimääräiset välilyönnit
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    // tarkastetaan kenttien arvot ja asetetaan virheilmoitukset tai onnistumisilmoitukset
    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters.')
    } else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }
};
