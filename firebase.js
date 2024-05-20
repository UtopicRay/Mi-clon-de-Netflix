// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, singOut} from 'firebase/auth';
import {addDoc, colletion, getFirestore} from 'firebase/firestore';
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyATwJcGnZFY1qzulilH2syDtNBJ_qcT-g4",
    authDomain: "mi-nextflix-clon.firebaseapp.com",
    projectId: "mi-nextflix-clon",
    storageBucket: "mi-nextflix-clon.appspot.com",
    messagingSenderId: "669395949994",
    appId: "1:669395949994:web:2c943cca137b76e3e273d3",
    measurementId: "G-B1LHE3914B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore()

async function signIn(name, email, password) {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(colletion(db, "user"), {
            uid: user.uid,
            name,
            authPovider: 'local',
            email,
        })
    } catch (error) {
        alert(error)
    }
}

async function login(email, password) {
    try {
       await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        alert(error)
    }
}

function logout() {
    singOut()
}

export {logout, login, auth, signIn,db}