import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDdvjYaALMjM8dcLH09RIt7NslbXxmFvEs",
    authDomain: "clone-ce884.firebaseapp.com",
    projectId: "clone-ce884",
    storageBucket: "clone-ce884.appspot.com",
    messagingSenderId: "213638865484",
    appId: "1:213638865484:web:1f6023633ce3f891074ae9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };