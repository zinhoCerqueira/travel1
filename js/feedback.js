findFeedbacks();

function findFeedbacks() {
    firebase.firestore()
        .collection('feedback')
        .get()
        .then(snapshot => {
            const feedbacks = snapshot.docs.map(doc => doc.data());
            showFeedbacks(feedbacks);
        })
}

function showFeedbacks(feedbacks){
    console.log(feedbacks);
}
const form = {
    name: () => document.getElementById('name'),
    feedback: () => document.getElementById('feedback'),
    avaliation: () => document.getElementById('avaliation')
}

function sendFeedback(){


    const feedback = {
        username :form.name().value,
        feedbackUser : form.feedback().value,
        avaliation : form.avaliation().value
    }

    firebase.firestore()
    .collection("feedback")
    .add(feedback)
    .then(() =>{
        alert("Thanks for your opinion.");
        window.location.href="../../html/localShopToGo.html";
    })
    .catch(() =>{
        alert(Erro);
    })


}