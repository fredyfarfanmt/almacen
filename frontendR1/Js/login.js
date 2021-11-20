import {
    lengthValidation,
    emailValidation
} from './validation.js'



const loginBtn = document.getElementById("login")
const errorLogin = document.getElementById("errorLogin")







loginBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    if (lengthValidation(email) == true && lengthValidation(password) == true) {
        errorLogin.innerHTML = ""
        if (emailValidation(email) == true) {
            errorLogin.innerHTML = ""
        } else {
            errorLogin.innerHTML = "El email es invalido"
        }
    } else {
        errorLogin.innerHTML = "Los campos no deben estar vacios"
    }
})