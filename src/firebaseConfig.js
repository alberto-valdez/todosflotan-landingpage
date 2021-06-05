
import firebase from 'firebase/app';
import 'firebase/firebase-firestore'
var firebaseConfig = {
   
};

const fire = firebase.initializeApp(firebaseConfig);
const store = firebase.firestore();



export { store };

