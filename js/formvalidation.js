const passDiv = document.getElementById("pass_div")
const emailDiv = document.getElementById("email_div")
const password = document.getElementById("password")
const email = document.getElementById("email")
const loginform = document.getElementById("loginform")

loginform.addEventListener("submit", (event) => {

    if (!email.value) {
        emailDiv.classList.replace("border-gray-600", "border-red-600");
        event.preventDefault();
    } else {
        emailDiv.classList.replace("border-red-600", "border-gray-600");
    }
    if (!password.value) {
        passDiv.classList.replace("border-gray-600", "border-red-600");
        event.preventDefault();
    } else {
        passDiv.classList.replace("border-red-600", "border-gray-600");
    }
});