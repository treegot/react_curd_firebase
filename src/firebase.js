 
import firebase from 'firebase/compat/app';
import "firebase/compat/database";


const firebaseConfig = {
    apiKey: "AIzaSyByT9zZX0fzzpOOp6zrsJaDkmJOEMrWYHM",
    authDomain: "react-contact-972c5.firebaseapp.com",
    projectId: "react-contact-972c5",
    storageBucket: "react-contact-972c5.appspot.com",
    messagingSenderId: "431218135440",
    appId: "1:431218135440:web:3e9e9c6aabbd83d425a315"
  };
const fireDb =firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();  