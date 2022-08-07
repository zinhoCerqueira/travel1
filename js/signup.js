firebase.auth().onAuthStateChanged(user => {
    if(user){
        window.location.href = "../html/localShopToGo.html";
    }
})

const form = {
    email: () => document.getElementById('email'),
    password: () => document.getElementById('password'),
    confirmPassword: () => document.getElementById('confirmPassword'),
    registerButton: () => document.getElementById('register-button')
}

function onChangeEmail(){

    const emailIsValid = isEmailValidate();
    document.getElementById("register-button").disabled = !emailIsValid ;
    if(!emailIsValid){
        alert("Invalid Email");
    }
    toggleRegisterButtonDisable();
}

//Check Email
function isEmailValidate(){
    const email = document.getElementById("email").value;
    if(!email){
        return false;
    }
    return validateEmail(email);
            
}

function validateEmail(email){
    return /\S+@\S+\.\S+/.test(email);
}

function onChangePassword(){

    const password = form.password().value;
    if(password.length < 6){
        alert("Password needs 6 or more characters");
    }
    toggleRegisterButtonDisable();
}

function onChangeConfirmPassword(){

    const confirmPassword = form.confirmPassword().value;
    const password = form.password().value;
    if(password != confirmPassword){
        alert("Password fields must be the same.");
    }
    else if(confirmPassword.length < 6){
        alert("Password needs 6 or more characters");
    }
    toggleRegisterButtonDisable();
}

function toggleRegisterButtonDisable() {
    form.registerButton().disabled = !isFormValid();
}

function isFormValid() {
    const email = form.email().value;
    if (!email || !validateEmail(email)) {
        return false;
    }

    const password = form.password().value;
    if (!password || password.length < 6) {
        return false;
    }

    const confirmPassword = form.confirmPassword().value;
    if (password != confirmPassword) {
        return false;
    }

    return true;
}

function register(){
    
    const email = form.email().value;
    const password = form.password().value;

    firebase.auth().createUserWithEmailAndPassword(
        email,password
    ).then(()=>{
        window.location.href = "../../html/localShopToGo.html";
    }).catch(error => {
        alert(getErrorMessage(error));
    })
}

function getErrorMessage(error){
    if(error.code == "auth/email-already-in-use"){
        return "Email is already in use.";
    }
    return error.message;
}





/*
// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyD4B5pZLuY1NIL23mvjn7gN6mtvZ8ngR2E",
    authDomain: "think-travel-980d8.firebaseapp.com",
    databaseURL: "https://think-travel-980d8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "think-travel-980d8",
    storageBucket: "think-travel-980d8.appspot.com",
    messagingSenderId: "316025540931",
    appId: "1:316025540931:web:3d68968a71286eff68dff6",
    measurementId: "G-7D0MCFMRM0"
};

// this is a initialize Firebase 
const app = initializeApp(firebaseConfig);

import { getDatabase, set, ref, update }
from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";

const db = getDatabase();

// The References

const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("signup");

// Validation

function Validation() {
    let nameregex = /^[a-zA-Z\s]+$/;
    let email = /^[a-zA-Z0-9]+@(gmail|yahoo|outlook)\.com$/;

    if (nameregex.test(name.value)) {
        alert("the name should only contain alphabets");
        return false;
    }

    if (!email.test(email.value)) {
        alert("enter a valid email");
        return false;
    }

    return true;
}

//register user to firebase

function RegisterUser() {
    if (!Validation()) {
        return;
    }
    const dbRef = ref(db);

    get(child(dbRef, "UsersList/" + name.value)).then((snapshot) => {
        if (snapshot.exist()) {
            alert("Account already exists");
        } else {
            set(ref(db, "UsersList/" + name.value), {
                    name: name.value,
                    email: email.value,
                    password: pass.value,

                })
                .then(() => {
                    alert("user added successfully");
                })
                .catch((error) => {
                    alert("error" + error);

                })
        }
    });
}

//Assign the events

*/






/* Webpage: Sign Up 

let btn = document.querySelector('#verPassword')
let btnConfirm = document.querySelector('#lookConfirmPassword')


let name = document.querySelector('#name')
let labelName = document.querySelector('#labelName')
let validName = false

let username = document.querySelector('#username')
let labelUsername = document.querySelector('#labelUsername')
let validUsername = false

let password = document.querySelector('#password')
let labelPassword = document.querySelector('#labelPassword')
let validPassword = false

let confirmPassword = document.querySelector('#confirmPassword')
let labelConfirmPassword = document.querySelector('#labelConfirmPassword')
let validConfirmPassword = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

name.addEventListener('keyup', () => {
    if (name.value.length <= 2) {
        labelName.setAttribute('style', 'color: red')
        labelName.innerHTML = 'Name *enter at least 3 characters'
        name.setAttribute('style', 'border-color: red')
        validName = false
    } else {
        labelName.setAttribute('style', 'color: green')
        labelName.innerHTML = 'Name'
        name.setAttribute('style', 'border-color: green')
        validName = true
    }
})

usurname.addEventListener('keyup', () => {
    if (usurname.value.length <= 4) {
        labelUsurname.setAttribute('style', 'color: red')
        labelUsurname.innerHTML = 'Username *Enter at least 3 characters'
        username.setAttribute('style', 'border-color: red')
        validUsername = false
    } else {
        labelUsername.setAttribute('style', 'color: green')
        labelUsername.innerHTML = 'Username'
        username.setAttribute('style', 'border-color: green')
        validUsername = true
    }
})

password.addEventListener('keyup', () => {
    if (password.value.length <= 5) {
        labelPassword.setAttribute('style', 'color: red')
        labelPassword.innerHTML = 'Password *Enter at least 5 characters'
        password.setAttribute('style', 'border-color: red')
        validPassword = false
    } else {
        labelPassword.setAttribute('style', 'color: green')
        labelPassword.innerHTML = 'Password'
        password.setAttribute('style', 'border-color: green')
        validPassword = true
    }
})

confirmPassword.addEventListener('keyup', () => {
    if (password.value != confirmPassword.value) {
        labelConfirmPassword.setAttribute('style', 'color: red')
        labelConfirmPassword.innerHTML = 'Confirm Password *The password does not confirm'
        confirmPassword.setAttribute('style', 'border-color: red')
        validConfirmPassword = false
    } else {
        labelConfirmPassword.setAttribute('style', 'color: green')
        labelConfirmPassword.innerHTML = 'Confirm Password'
        confirmPassword.setAttribute('style', 'border-color: green')
        validConfirmPassword = true
    }
})

function signup() {
    if (validName && validUsurname && validPassword && validConfirmPassword) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push({
            nameCad: name.value,
            userCad: username.value,
            passwordCad: password.value
        })

        localStorage.setItem('listaUser', JSON.stringify(listaUser))


        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Registering user...</strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

        setTimeout(() => {
            window.location.href = 'file:///Users/luisanunes/Documents/Macbook/NCI/Project/Think%20Travel%20Project/login.html'
        }, 3000)


    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Please fill in all fields correctly before registering</strong>'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')
    }
}

btn.addEventListener('click', () => {
    let inputPassword = document.querySelector('#password')

    if (inputPassword.getAttribute('type') == 'password') {
        inputPassword.setAttribute('type', 'text')
    } else {
        inputPassword.setAttribute('type', 'password')
    }
})

btnConfirm.addEventListener('click', () => {
    let inputConfirmPassword = document.querySelector('#confirmPassword')

    if (inputConfirmPassword.getAttribute('type') == 'password') {
        inputConfirmPassword.setAttribute('type', 'text')
    } else {
        inputConfirmPassword.setAttribute('type', 'password')
    }
})
*/