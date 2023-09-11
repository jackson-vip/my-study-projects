// Seleção de elementos e atribuição: 
const password = document.querySelector("#pwd");
const passwordLabel = document.querySelector("#label-i");

let text, validIcons, invalidIcons;

// Funções : 

function toggle() {
    let iconEye = document.querySelector(".fa-eye");
    let iconEyeSlash = document.querySelector(".fa-eye-slash");
    let passwordInput = document.getElementById("pwd");

    iconEye.classList.toggle("hidden");
    iconEyeSlash.classList.toggle("hidden");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

function valid(item, validIcon, invalidIcon) {
    text = document.querySelector(`#${item}`);
    text.style.opacity = "1";

    validIcons = document.querySelector(`#${item} .${validIcon}`);
    validIcons.style.opacity = '1';

    invalidIcons = document.querySelector(`#${item} .${invalidIcon}`);
    invalidIcons.style.opacity = "0";
}

function invalid(item, validIcon, invalidIcon) {

    text = document.querySelector(`#${item}`);
    text.style.opacity = "0.5";

    validIcons = document.querySelector(`#${item} .${validIcon}`);
    validIcons.style.opacity = '0';

    invalidIcons = document.querySelector(`#${item} .${invalidIcon}`);
    invalidIcons.style.opacity = "1";
}

function textChange() {
    if (password.value.match(/[A-Z]/) != null)
        valid('capital', 'fa-check', 'fa-times');
    else
        invalid('capital', 'fa-check', 'fa-times');

    if (password.value.match(/[0-9]/) != null)
        valid('number', 'fa-check', 'fa-times');
    else
        invalid('number', 'fa-check', 'fa-times');

    if (password.value.match(/[!@#$%^&*]/) != null)
        valid('special-char', 'fa-check', 'fa-times');
    else
        invalid('special-char', 'fa-check', 'fa-times');

    if (password.value.length >= 8)
        valid('more-than-8', 'fa-check', 'fa-times');
    else
        invalid('more-than-8', 'fa-check', 'fa-times');
    if (password.value.length >= 16)
        alert('only 16 characters are allowed!');
}

function validacaoEmail(field) {
    let input = document.getElementById("email");
    let email = field.value;
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let msgElement = document.getElementById("msg");


    if (email.trim() === '') {
        msgElement.innerHTML = "<p class='danger'>* Please enter an email address.</p>";
        input.style.color = 'var(--text-gray)';
    } else if (regex.test(email)) {
        input.style.color = 'var(--check)';
        msgElement.innerHTML = "";
    } else {
        msgElement.innerHTML = "<p class='danger'>* Please check the email field for inconsistent data.</p>";
        input.style.color = 'var(--text-gray)';
    }
}

// Eventos: 

document.getElementById("email").addEventListener("focus", function () {
    document.getElementById("msg").innerHTML = "";
});

