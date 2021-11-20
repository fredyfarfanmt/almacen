import {
    lengthValidation,
    emailValidation,
    passwordValidation
} from './validation.js'

const registerBtn = document.getElementById("register")

const errorReg = document.getElementById("errorReg")
registerBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const user = document.getElementById("user").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const passwordConf = document.getElementById("passwordConf").value
    if (lengthValidation(user) == true && lengthValidation(email) == true && lengthValidation(password) == true && lengthValidation(passwordConf) == true) {
        errorReg.innerHTML = ""
        if (emailValidation(email) == true) {

            if (passwordValidation(password, passwordConf) == true) {

            } else {
                errorReg.innerHTML = "Las contraseñas no coinciden"
            }
        } else {
            errorReg.innerHTML = "Email no valido"
        }
    } else {
        errorReg.innerHTML = "Los campos no deben estar vacios"

    }
})