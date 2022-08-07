


// Checks whether or not you have valid data in the fields
function validateFieldEmail(){

    const emailIsValid = isEmailValidate();
    document.getElementById("loginbutton").disabled = !emailIsValid ;
    if(!emailIsValid){
        alert("Invalid Entries");
    }
}

function validateFieldPassWord(){
    const passwordIsValid = validatePassword();
    document.getElementById("password").disabled = !validatePassword ;
    if(!passwordIsValid){
        alert("Invalid Entries");
    }
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

//Check Password
function validatePassword(){
    const password = document.getElementById('password').value;
    if(!password){
        return false;
    }
    return true;
}

//login using firebase
function login(){

    firebase.auth().signInWithEmailAndPassword(document.getElementById("email").value,document.getElementById('password').value).
    then(response=>{
        console.log('success',response)
        window.location.href = "../html/localShopToGo.html";
    }).catch(error =>{
        alert(getErrorMessage(error));
    });
}

function register(){
    window.location.href = "../html/signUp.html";
}

//Generic method to show the error on the screen
function getErrorMessage(error) {
    if (error.code == "auth/user-not-found") {
        return "User not found";
    }
    if (error.code == "auth/wrong-password") {
        return "Invalid password";
    }
    return error.message;
}

//A user can recover the password just by entering his email and clicking on the button, firebase authentication does the job.
function recoverPassword(){
    firebase.auth().sendPasswordResetEmail(document.getElementById("email").value).then(() => {
        alert('Email enviado com sucesso');
    }).catch(error => {
        alert(getErrorMessage(error));
    });
}

firebase.auth().onAuthStateChanged(user => {
    if(user){
        window.location.href = "../html/localShopToGo.html";
    }
})



