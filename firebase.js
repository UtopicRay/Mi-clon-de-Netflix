// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from 'firebase/auth';
import {addDoc, collection, getFirestore} from 'firebase/firestore';
import {getAnalytics} from "firebase/analytics";
import {toast} from "react-toastify";
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

async function signUp(name, email, password) {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authPovider: 'local',
            email,
        })
        toast.success('Usuario registrado con exito')
    } catch (error) {
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

async function login(email, password) {
    try {
       await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

function logout() {
    signOut(auth)
}

export {logout, login, auth, signUp,db}