const inputs = document.querySelectorAll(".form-input-name, .form-input-email, .form-input-password, .form-input-repeat-password")

const submitButton = document.getElementById("submit-button")
submitButton.addEventListener('click', function (e) {
    e.preventDefault()
    if (validateInputs()) {
        alert("Contra criada!")
        location.reload()
    } else {
        alert("Erro")
    }

})

function validateInputs() {
    validateIfExistisFieldsNull()
    validateEmail()
    validatePassword()
    validateIfContainsEmoji()
}

function validateIfExistisFieldsNull() {
    inputs.forEach(input => {
        if(input.value === '') {
            alert("É obrigatório preencher todos os campos")
            return true
        }
        return false
    });
}

function validateIfContainsEmoji() {
    inputs.forEach(input => {
        if (hasEmoji(input.value)) {
            alert("Não é permitido o uso de emoji")
            return true
        }
        return false
    })
}

function validateEmail() {
    const emailInput = document.querySelector(".form-input-email")
    if (!isValidEmail(emailInput.value)) return alert("Endereço de e-mail inválido")
}

function validatePassword() {
    const passwordInput = document.querySelector(".form-input-password").value
    const repeatPasswordInput = document.querySelector(".form-input-repeat-password").value

    if(passwordInput.length <= 7) {
        alert("A senha deve ter no minimo 8 caracteres")
        return false;
    }

    if(passwordInput !== repeatPasswordInput) {
        alert("As senhas não são correspondentes")
        return false;
    }

    if (!isValidPassword(passwordInput)) {
        alert("A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.")
        return false;
    }

    return true;
}
