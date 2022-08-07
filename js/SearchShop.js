/*Firebase conf*/
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get a list of countries from the database



// Get a list of cities from the database
async function getcity(db) {
    const cityCol = collection(db, 'cities');
    const citySnapshot = await getDocs(cityCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}

getcity.get();