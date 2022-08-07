const form = {
    name: () => document.getElementById('name'),
    email: () => document.getElementById('email'),
    msg: () => document.getElementById('msg')
}

function sendMsg(){


    const message = {
        name :form.name().value,
        email : form.email().value,
        msg : form.msg().value
    }

    firebase.firestore()
    .collection("message")
    .add(message)
    .then(() =>{
        alert("Thanks for your message.");
        window.location.href="../../html/localShopToGo.html";
    })
    .catch(() =>{
        alert(Erro);
    })


}